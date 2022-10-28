import { FaShoppingCart, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

const ItemCard = ({ item, addToCart, cart }) => {
  const { item_name, price, img_url, item_id } = item;
  const pathName = window.location.pathname
  const newCart = [...cart]

  function removeItem (item_id) {
    const updatedCart = newCart.findIndex((Currentitem) => {
      return Currentitem.item_id === item_id
    })
    addToCart(newCart.splice(updatedCart, 1))
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
          item_id={item_id}
          className="react-icon-btn"
         >           
          <FaTrashAlt size={30} className="react-icon" /></button> :  
           <button
             onClick={() => addToCart([...cart, item])}
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
