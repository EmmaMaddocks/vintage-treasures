import { useEffect } from "react"
import { useState } from "react"
import  ItemCard  from './ItemCard'

function Items(props) {
    const { setItems, newItems, cart, addToCart } = props;

    const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    setIsLoading(true)
    fetch('https://fc-marketplace.herokuapp.com/api/items')
    .then((res) => res.json())
    .then(({items}) => {
        setItems(items)
        setIsLoading(false)
    })
}, [setItems])

if (isLoading) return <p>Loading...</p>



return (
    <>
    <h3>Showing all items</h3>
    <div className="item-list">

        {newItems.map((item) => {
            return (
            <ItemCard key={item.item_id} item={item} cart={cart} addToCart={addToCart}/>
   
            )
        })}

    </div>
    </>
)

}

export default Items