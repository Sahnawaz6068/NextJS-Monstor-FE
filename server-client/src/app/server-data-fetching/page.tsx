

interface Todo{
    title:String,
    description:String,
    userId:number,
    done:boolean,
    id:number
}

const ServerDataFetching = async () => {
    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data:Todo[]=await response.json();

    // console.log(data);

  return (
    <div>
        <section>
            {data.map((d)=>(
                <div key={d.id}>{d.id}:-{d.title}</div>
            ))}
        </section>
    </div>
  )
}

export default ServerDataFetching