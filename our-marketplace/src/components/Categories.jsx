import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";


function Categories() {

    const { category } = useParams();

  const [categoryArr, setCategory] = useState([]);

console.log(category)

  useEffect(() => {
    fetch(`https://fc-marketplace.herokuapp.com/api/items?category_name=${category}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items)
        setCategory(items);
      });
  }, []);

  return (
    <div className='item-list'>

        {categoryArr.map((item) => {
          return <ItemCard key={item.item_id} item={item} />;
        })}

    </div>
  );
}

export default Categories;
