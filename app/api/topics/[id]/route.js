import dbConnect from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    const {id} = params;
    await dbConnect();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic},{status:200});
}

export async function PUT(req, {params}){
    const {id} = params;
    const {edTitle:title, edDescription:description} = await req.json();
    await dbConnect();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message:'수정완료'},{status:200});
}

export async function DELETE(request, { params }){
    const { id } = params;
    await dbConnect();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "삭제했습니다."}, {status: 200});
}