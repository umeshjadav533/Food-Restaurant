/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Food_Card from "./Food_Card";

function FetchData({id_start, id_end}){
    const [foodData,setfoodData] = useState([]);
    const api = axios.create({
        baseURL: "http://localhost:3000/"
    });


    async function getfoodData(){
        const res = await api.get("food_item");
        const filteredData = res.data.filter(item=>item.id >= Number(id_start) && item.id <= Number(id_end));
        setfoodData(filteredData);
    }
    useEffect(()=>{
        getfoodData();
    },[id_start, id_end])

    return (
    <div>
        <ul className="d-flex flex-wrap justify-content-center gap-4 mt-5 p-0">
        {
            foodData.map((item)=>(
                <Food_Card currElement={item} />
            ))
        }
        </ul>
    </div>
    )
}

export default FetchData;