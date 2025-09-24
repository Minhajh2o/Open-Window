import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center border border-gray-300 bg-gray-300 p-2 mt-8 mb-5">
      <a className="bg-[#D72050] px-3 py-2 text-lg text-base-100">Latest</a>
      <Marquee pauseOnHover={true} className="ml-2 text-lg text-gray-700" speed={50} gradient={false}>
        <Link to="/news" className="mr-10">
          This is a demo of the latest news ticker. Stay tuned for more updates!
        </Link>
        <Link to="/news" className="mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          ipsa!
        </Link>
        <Link to="/news" className="mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          ipsa!
        </Link>
        <Link to="/news" className="mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          ipsa!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
