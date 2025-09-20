import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold mb-5">All Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} key={category.category_id} className={({ isActive }) => `btn cursor-pointer text-left ${isActive ? 'bg-gray-300' : ''}`}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
