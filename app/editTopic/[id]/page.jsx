import EditTopicForm from "@/components/EditTopicForm";

const getTopById = async(id)=>{
    try{    
        const rs = await fetch(`http://localhost:3000/api/topics/${id}`,{
            cache:"no-store"
        });
        if(!rs.ok){
            throw new Error('조회 실패');
        }
        
        return rs.json();
    }catch(error){
        console.log(error);
    }
}

const page = async({params}) => {
    const {id} = params;
    const {topic} = await getTopById(id);
    const {title, description} = topic;
  return (
    <div>
       <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}

export default page