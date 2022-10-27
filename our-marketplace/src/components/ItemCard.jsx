function ItemCard({ item }) {
    const { item_name, price, img_url, item_id } = item

    return ( 
        <li key={item_id} className='list-item'>

            <img src={img_url} alt={item_name} className='list-img'/>
            <h2>{item_name}</h2>
            <div className="price-button">
            <p>£{price}</p>
            <button>ADD TO CART</button>       
            <button>VIEW DETAILS</button>      
            </div>
        </li>
           
    )
}

export default ItemCard