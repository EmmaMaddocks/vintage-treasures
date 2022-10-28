//current items to buy
import ItemCard from "./ItemCard";

function Basket({cart}) {


    return (
        <div className="basket-page">
        <h3 className="basket-title">Your basket</h3>
        <div className='item-list'>
    
            {cart.map((item) => {
                console.log(cart)
              return (
              <ItemCard key={item.item_id} item={item} cart={cart} />)
            })}
    
        </div>
        <button className="blue-btn-lrg">Complete purchase</button>
        </div>
      );
    }


export default Basket