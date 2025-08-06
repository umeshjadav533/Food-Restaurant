import { useEffect, useState } from "react";

const Cart = () => {
    const [cartitems,setcartitems] = useState([]);
    const [quantity,setquantity] = useState();
    
    useEffect(()=>{
        const cartdata = JSON.parse(localStorage.getItem("foodcart")) || [];
        setcartitems(cartdata);
    },[]);



    const deleteitem = (id) => {
        const existingcart = JSON.parse(localStorage.getItem("foodcart")) || [];
        const updateCart = existingcart.filter(item => item.id !== id);
        localStorage.setItem("foodcart",JSON.stringify(updateCart));
        setcartitems(updateCart);
    }

    return (
    <section id="cart-section" className="row container-fluid mx-0">
    <h2>Shopping cart</h2>
        {
            cartitems.map((item)=>(
                <div className="col-6" id="cart-container">
                    <div className="row">
                        <div className="col-3 p-2 d-flex justify-content-center align-items-cenetr" id="cart-container-header">
                            <img src={item.image} style={{width:"150px"}}/>
                        </div>
                        <div className="col-9 p-2" id="cart-container-body">
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <div className="d-flex">
                                <h3>$ {item.price}</h3>
                                <input type="number" min="1" max="20" defaultValue="1" className="fs-4 mx-5 ps-3" style={{width:"70px"}} value={quantity} onClick={(e)=>setquantity(e.target.value)}/>
                                <button type="button" onClick={()=>deleteitem(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </section>
    )
}

export default Cart;