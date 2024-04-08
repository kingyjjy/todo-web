"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!title || !description){
      alert('제목 또는 내용이 입력되지 않았습니다.');
      return;
    }
    try{
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
          headers: {
            "Content-type" : "application/json"
          },
          body: JSON.stringify({ title, description })
      });
      if(res.ok){
        // const data = await res.json();
        alert("등록 성공");
        router.push("/");
        router.refresh(router.asPath);
      }else{
        throw new Error('입력오류');
      }
    }catch(error){
      console.log(error);
    }
  }

    return (
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input type="text" className="border border-slate-500 px-8 py-2" placeholder="제목을 쓰세요." value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea className="border border-slate-500 px-8 py-2" rows='5' placeholder="제목을 쓰세요." value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6">전 송</button>
      </form>
    )
  }
  
  export default AddTopic