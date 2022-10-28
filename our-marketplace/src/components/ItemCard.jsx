import { FaShoppingCart, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

const ItemCard = ({ item, setCart, cart }) => {
  const { item_name, price, img_url, item_id } = item;
  const pathName = window.location.pathname
//   const newCart = [...cart]

  const removeItem = (item_id) => {
    const cartCopy = [...cart]
    const newBasket = cartCopy.filter((Currentitem) => Currentitem.item_id !== item_id)

    setCart(newBasket)
  }

  return (
    <li key={item_id} className="list-item">
      <h2>{item_name}</h2>
      <img src={img_url} alt={item_name} className="list-img" />

      <div className="price-button">
        <p>£{price}</p>
        <div>
          <a>
            <FaInfoCircle size={30} className="react-icon" />
          </a>
          {pathName === '/basket' ? 
          <button onClick={() => removeItem(item_id)}
          className="react-icon-btn"
         >           
          <FaTrashAlt size={30} className="react-icon" /></button> :  
           <button
             onClick={() => setCart([...cart, item])}
            className="react-icon-btn"
           >           
            <FaShoppingCart size={30} className="react-icon" />
          </button> }
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
