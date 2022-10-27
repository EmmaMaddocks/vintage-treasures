//current items to buy
import ItemCard from "./ItemCard";

function Basket({cart}) {


    return (
        <>
        <h3>Your basket:</h3>
        <div className='item-list'>
    
            {cart.map((item) => {
                console.log(cart)
              return (
              <ItemCard key={item.item_id} item={item} cart={cart} />)
            })}
    
        </div>
        </>
      );
    }


export default Basket