import { useEffect } from "react"
import { useState } from "react"
import  ItemCard  from './ItemCard'

function Home() {
    
    const [newItems, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true)
    fetch('https://fc-marketplace.herokuapp.com/api/items')
    .then((res) => res.json())
    .then(({items}) => {
        setItems(items)
        setIsLoading(false)
    })
}, [])

if (isLoading) return <p>Loading...</p>

return (
    <div>
        {newItems.map((item) => {
            return (<ul>
            <ItemCard key={item.item_id} item={item}/>
            </ul>
            )
        })}
    </div>
)

}

export default Home