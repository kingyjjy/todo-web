"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const EditTopicForm = ({id, title, description}) => {
    const [edTitle, setEdTitle] = useState(title);
    const [edDescription, setEdDescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ edTitle, edDescription })
            });
            if(!res.ok){
                throw new Error('수정 실패');
            }
            const data = await res.json();
            alert(data.message);
            router.refresh();
            router.push("/");
        }catch(error){
            console.log(error);
        }
    }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input type="text" className="border border-slate-500 px-8 py-2" placeholder="제목을 쓰세요." value={edTitle} onChange={(e)=>setEdTitle(e.target.value)} />
          <textarea className="border border-slate-500 px-8 py-2" rows='5' placeholder="제목을 쓰세요." value={edDescription} onChange={(e)=>setEdDescription(e.target.value)}/>
          <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6">전 송</button>
      </form>
  )
}

export default EditTopicForm