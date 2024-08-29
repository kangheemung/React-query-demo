import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from 'react';
//APIを呼ぶ
//dataを見る

const ReactQueryPage = () => {
    const fetchPost=()=>{
        return axios.get('http://localhost:3004/posts')
    }
    const {isLoading,data,isError,error} = useQuery({
    queryKey:["posts"],//各々のAPIの名前をきめる
    //각각의 API의 이름을 정한다.
    queryFn: fetchPost,
    retry: 1,
    select:(data)=>{
        return data.data;
    }
    });
    console.log("ddd",data,isLoading);
    console.log("earror",isError,error);
    //errorの確認できる
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return(
    <div>
        {data.map((item)=>(
    <div>{item.title}</div>
    ))}
    </div>
    );

};

export default ReactQueryPage
