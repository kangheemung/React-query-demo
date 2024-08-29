import React,{useState,useEffect}from 'react';

const Nomalfetch = () => {
    const [isLoading, setIsLoading]=useState(false);
    const [data, setData]=useState(null);
    const fetchPost =async () =>{
        setIsLoading(true);
        const url = "http://localhost:3004/posts";
        const res = await fetch(url);
        const data = await res.json();
        setIsLoading(false);
        setData(data);
        console.log( "namalfetch", data)
    };
    useEffect(()=>{
        fetchPost();
    },[]);

    if (isLoading){
        return <h1>Loading...</h1>;
    }
  return (
    <div>
    {data?.map((item, index) => (
                <div key={index}>
                    {item.title}
                </div>
            ))}
    </div>
  )
}

export default Nomalfetch
