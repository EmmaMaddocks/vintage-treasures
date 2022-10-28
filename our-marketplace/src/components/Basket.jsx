//current items to buy
import { useEffect } from "react";
import ItemCard from "./ItemCard";

function Basket({cart, setCart}) {



    return (
        <div className="basket-page">
        <h3 className="basket-title">Your basket</h3>
        <div className='item-list'>
    
            {cart.map((item) => {
              return (
              <ItemCard key={item.item_id} item={item} cart={cart} setCart={setCart}/>)
            })}
    
        </div>
        <button className="blue-btn-lrg">Complete purchase</button>
        </div>
      );
    }


export default Basket