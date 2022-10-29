//current items to buy
import { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import FetchOrders from "./PastOrderCard";


function Basket({cart, setCart, currentUser}) {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault()    
    cart.map((item) =>
          fetch(`https://fc-marketplace.herokuapp.com/api/users/${currentUser}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       "item_id": item.item_id
          }),
  }).then((response) => response.json())
.then((newItem) => {
console.log(newItem)
})
    )
        navigate("/orderconfirmation");
    
    }

    return (
        <div className="basket-page">
        <h3 className="basket-title">Your basket</h3>
        <div className='item-list'>
    
            {cart.map((item) => {
              return (
              <ItemCard key={item.item_id} item={item} cart={cart} setCart={setCart}/>)
            })}
    
        </div>
        <button className="blue-btn-lrg" onClick={handleClick}>Complete purchase</button>
        </div>
      );
    }


export default Basket