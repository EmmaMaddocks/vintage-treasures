import { useEffect } from "react"
import { useState } from "react"
import  ItemCard  from './ItemCard'

function Electronics() {
    
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
        {newItems.filter(item => item.category_name === '${category prop}').map(filtereditems => (
            <ul>
            <ItemCard key={filtereditems.item_id} item={filtereditems}/>
            </ul>
            )
        )}
    </div>
)

}

export default Electronics