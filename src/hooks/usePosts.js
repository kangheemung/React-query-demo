import { useQuery } from "@tanstack/react-query";
import axios from "axios";

    const fetchPost=()=>{
        console.log();
        // const id=queryData.queryKey.find((key) => key.id).id;;
        return axios.get("http://localhost:3004/posts");
    };


export const usePostQuery=()=>{
    return useQuery({
        // queryKey:["posts"],//各々のAPIの名前をきめる
        queryKey:["posts"],//상세페이지
        //각각의 API의 이름을 정한다.
        queryFn: ()=> fetchPost(),
        //retry: 1,
        //staleTime: 10000, //apiを呼ぶ時の時間//기본값 0
        //api를 부를때의 시간 /staleTime< gcTime
        select: (data)=>{
            return data.data;
        },// gcTime: 5000,//기본값 5분 캐쉬 가져가는 시간
            //refetchInterval:3000,
            //refetchOnMount:false,// 호출 한번만 하겠다. 
            // refetchOnWindowFocus:true//윈도우가 다시 이창으로 돌아오면 다시 리프레쉬해주기.
            enabled: false,// 호출이 안됨사용할수 없음 버튼을 눌렀을때 호출되게 사용할수 있다.조건을 써줄수도 있다.기본값은 참

        });
};