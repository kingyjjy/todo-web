import mongoose from "mongoose";

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"mymemo"
        });
        console.log('mymemo db에 접속 성공');
    }catch(error){
        console.log(error);
    }
}

export default dbConnect;