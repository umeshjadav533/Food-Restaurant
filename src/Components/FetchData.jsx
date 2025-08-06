import { useEffect, useState } from "react";
import Food_Card from "./Food_Card";
import foodItems from './../assets/assests'

function FetchData({id_start, id_end}){
    const [foodData,setfoodData] = useState(foodItems);

    async function getfoodData(){
        const filteredData = foodData.filter(item=>item.id >= Number(id_start) && item.id <= Number(id_end));
        await setfoodData(filteredData);
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