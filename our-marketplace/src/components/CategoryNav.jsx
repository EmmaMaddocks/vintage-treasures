import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoryNav(props) {
  const [categoryArr, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fc-marketplace.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then(({ categories }) => {
        setCategory(categories);
      });
  }, []);

  return (
    <div className="category-menu">
      {categoryArr.map(({ category_name }) => {
        return (

          <div className="category-card">
            <Link to={`/categories/${category_name}`}>
              <img src={`/${category_name}.jpeg`} />
              <li className="category-list" key={category_name}>{category_name} </li>
            </Link>
            </div>

        );
      })}
    </div>
  );
}

export default CategoryNav;
