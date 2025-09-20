import { FaStar, FaRegStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  // Clamp details text (short preview)
  const previewText = details.length > 120 ? details.slice(0, 120) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden">
      {/* Author + Share */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-200 bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-700">{author.name || "Unknown Author"}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div>
            <button className="btn btn-sm btn-ghost">
          <FaRegBookmark  className="text-gray-500 text-lg" />
        </button>
        <button className="btn btn-sm btn-ghost">
          <FaShareAlt className="text-gray-500 text-lg" />
        </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 py-3 w-full h-80">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          {previewText} <span className="text-orange-500 font-semibold cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-t-gray-200 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, index) =>
            index < Math.floor(rating.number) ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
          <span className="ml-1 text-gray-700 font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
