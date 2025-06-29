// import { useState } from "react";

// import { useEffect } from "react";

const Food_Card = ({currElement}) => {
    
    const addtocart = () => {
        alert(currElement.name + " added to cart");
        const existingcartdata = JSON.parse(localStorage.getItem("foodcart")) || [];
        const updatedcartdata = [...existingcartdata,currElement];
        localStorage.setItem("foodcart",JSON.stringify(updatedcartdata)); 
    }

    return (
        <li key={currElement.id} className="list-unstyled card p-0" id="food-content-container" style={{width:"250px"}}>
                    <div id="food-image-container" className="d-flex justify-content-center align-items-center">
                        <img src={currElement.image} id="food-image"/>
                    </div>
                    <div id="food-main-content" className="card-body">
                        <p className="mb-0" style={{color:"#FF8800"}}>{currElement.name}</p>
                        <p className="mb-0">{currElement.description}</p>
                        <div className="row container-fluid p-0 m-0 my-3" id="food-bottom-content">
                            <div className="col-6 p-0"><h3 className="mb-0">${currElement.price}</h3></div>
                            <div className="col-6 p-0" id="add-to-cart"><button type="button" onClick={addtocart}>Add to cart</button></div>
                        </div>
                    </div>
                </li>
    )
}

export default Food_Card;