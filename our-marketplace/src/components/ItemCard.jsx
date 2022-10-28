import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";


function ItemCard({item, addToCart, cart}) {
    const { item_name, price, img_url, item_id } = item

    return ( 
        <li key={item_id} className='list-item'>
            <h2>{item_name}</h2>
            <img src={img_url} alt={item_name} className='list-img'/>

            <div className="price-button">
            <p>£{price}</p>
            <div>
            <a><FaInfoCircle size={30} className='react-icon'/></a>   
            <button onClick={() => 
            addToCart([...cart, (item)])
            } className='react-icon-btn'>
                <FaShoppingCart size={30} className='react-icon'/></button>   
            </div>
            </div>
        </li>
           
    )
}

export default ItemCard