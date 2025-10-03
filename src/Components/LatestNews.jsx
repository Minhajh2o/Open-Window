import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = ({breakingNews}) => {

  
  return (
    <div className="flex items-center border border-gray-300 bg-gray-300 p-2 mt-8 mb-5">
      <a className="bg-[#D72050] px-3 py-2 text-lg text-base-100">Latest</a>
      <Marquee pauseOnHover={true} className="ml-2 text-lg text-gray-700" speed={50} gradient={false}>
        {breakingNews.map(news => (
          <Link
            to={`/news/${news._id}`}
            key={news._id}
            className="mr-10"
          >{news.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
