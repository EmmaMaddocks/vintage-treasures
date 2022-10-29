import { useEffect } from "react"
import { useState } from "react"
import ItemCard from "./ItemCard";
import OrderHistoryCard from "./PastOrderCard";

const PreviousOrders = ({ currentUser }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [orders, orderHistory] = useState(true);


useEffect(() => {
    setIsLoading(true)
    fetch(`https://fc-marketplace.herokuapp.com/api/users/${currentUser}/orders`)
    .then((res) => res.json())
    .then(({items}) => {
        console.log(items)
        orderHistory(items)
        setIsLoading(false)
    })
}, [orderHistory])


if (isLoading) return <p>Loading...</p>

return (
    
    <div className="item-container">
    <h3>Showing all items</h3>
    <div className="item-list">

        {orders.map((item) => {
            return (
            <OrderHistoryCard key={item.item_id} item={item} />
   
            )
        })}

    </div>
    </div>
)



}

export default PreviousOrders