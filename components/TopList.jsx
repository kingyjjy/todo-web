import Link from "next/link"
import {AiFillDelete, AiOutlineEdit} from 'react-icons/ai'
import RemoveBtn from "./RemoveBtn";

const getTopics = async()=>{
    try{
        const res = await fetch('http://localhost:3000/api',{
            cache:"no-store"
        });
        if(!res.ok){
            throw new Error('조회 실패');
        }
        return res.json();
    }catch(error){
        console.log(error);
    }
}

const TopList = async() => {
    const {topics} = await getTopics();
  return (
    <>
        {topics.map((t)=>(
            <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl max-w-md truncate ...">{t.title}</h2>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={t._id}/>
                    <Link href={`/editTopic/${t._id}`}>
                        <AiOutlineEdit size={24}/>
                    </Link>
                </div>
                
            </div>
        ))}
        
    </>
    
  )
}

export default TopList