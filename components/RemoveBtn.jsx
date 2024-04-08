"use client"
import {AiFillDelete} from 'react-icons/ai'
import { useRouter } from 'next/navigation'


const RemoveBtn = ({id}) => {
    const router = useRouter();
    const removeTopic = async ()=>{
        const y = confirm('정말 삭제 하시겠습니까?');
        if(y){
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"DELETE"
            });
            if(res.ok){
                const data = await res.json();
                alert(data.message);
                router.refresh();
            }
        }
    }
  return (
    <button onClick={removeTopic} className='text-red-400'>
        <AiFillDelete size={24}/>
    </button>
  )
}

export default RemoveBtn