

const OrderHistoryCard = ({ item, setCart, cart }) => {
  const { item_name, price, img_url, item_id } = item;


  return (
    <li key={item_id} className="list-item">
      <h2>{item_name}</h2>
      <img src={img_url} alt={item_name} className="list-img" />

      <div className="price-button">
        <p>£{price}</p>
      </div>
    </li>
  );
}

export default OrderHistoryCard;
