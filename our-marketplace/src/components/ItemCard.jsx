function ItemCard({ item }) {
    const { item_name, price, img_url,  } = item

    return ( 
        <li>
            <h2>{item_name}</h2>
            <img src={img_url} alt={item_name}/>
            <p>{price}</p>       
        </li>
           
    )
}

export default ItemCard