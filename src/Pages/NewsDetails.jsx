import React from "react";
import Header from "../Components/Header";
import RightNavBar from "../Components/Layout_Component/RightNavBar";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const news = data.data[0];
  const { title, image_url, details } = news;
/**
 * {
    "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "01",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 488,
    "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    "author": {
        "name": "Jimmy Dane",
        "published_date": "2022-08-24 17:27:34",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
}
 */
  console.log(news);
  return (
    <div className="max-w-11/12 mx-auto">
      <Header />
      <main className="grid grid-cols-12 gap-6 my-8">
        <section className="col-span-9">
            <h3 className="text-xl font-bold mb-5">Open Window</h3>
            {/* card */}
          <div className="card bg-base-100 border border-gray-200">
            <figure className="p-6 pb-0 rounded-lg">
                <img src={image_url} alt={title} className="w-full h-full object-cover rounded-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions justify-start">
                <button className="btn bg-[#D72050] text-base-100"><FaArrowLeft /> All news in this category</button>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavBar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
