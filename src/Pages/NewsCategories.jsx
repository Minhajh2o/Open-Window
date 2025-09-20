import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const NewsCategories = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3 className="text-xl font-bold mb-5">Open Window Home</h3>
      <div className="space-y-6">
        {data.map((news) => <NewsCard key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default NewsCategories;
