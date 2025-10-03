import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout_Component/LeftNavbar";
import RightNavBar from "../Components/Layout_Component/RightNavBar";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const breakingNews = data.data;
  console.log(breakingNews);

  return (
    <div className="max-w-11/12 mx-auto">
      <header>
        <Header />
      </header>
      <section>
        <LatestNews breakingNews={breakingNews} />
      </section>
      <nav>
        <Navbar />
      </nav>
      <section className="grid grid-cols-12 gap-6 my-20">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <main className="col-span-6">
          <Outlet />
        </main>
        <aside className="col-span-3">
          <RightNavBar />
        </aside>
      </section>
    </div>
  );
};

export default Home;
