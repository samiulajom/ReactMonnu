import "./../assets/css/page3/page3.css";
import HeroPage2 from "../components/HeroPage2";
import Details from "../components/page3/Details";
import Seacrch from "../components/page3/Seacrch";
import Sketch from "../components/page3/Sketch";
import Qutation from "../components/page3/Qutation";
import Port3 from "../components/page3/Port3";
import TagBtn from "../components/TagBtn";
import Share from "../components/page3/Share";
import User from "../components/page3/User";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LatestPost from "../components/page3/LatestPost";
import Catagory from "../components/page3/Catagory";
import BlogTag from "../components/page3/BlogTag";

const Page3 = () => {
  return (
    <div className="page3">
      {/* <Nav /> */}
      <HeroPage2 />
      <section className="mu-article py-3">
        <div className="container ps-5 pe-5">
          <div className="row mu-details-letf">
            {/* left side start*/}
            <article className="col-lg-8  col-sm-12 col-12">
              <Details />
              <Sketch />
              <Qutation />
              <Port3 />
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center">
                <TagBtn />
                <Share />
              </div>
              <User />
            </article>
            {/* left side end */}
            {/* right side start */}
            <aside className="col-lg-4 col-sm-12 col-12">
              <Seacrch />
              <LatestPost />
              <Catagory />
              <BlogTag />
            </aside>
            {/* right side end */}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Page3;
