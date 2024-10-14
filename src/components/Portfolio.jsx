import "./../assets/css/portfolio.css";
import portImg from "./../assets/image/portfolio/portfoli.png";
import Gallery from "./Gallery";
const Portfolio = () => {
  return (
    <div>
      <section className="mu-portfolio position relative">
        <div className="">
          <div className="mu-port-header text-center col-12">
            <p>PORTFOLIO</p>
            <h1 className="fw-bold text-uppercase text-light">Selected Work</h1>
          </div>
        </div>

        <Gallery />

        <div className="container">
          <div className="row portfolio-btn">
            <a
              href="#"
              className="btn rounded-0 text-uppercase py-3 px-5 text-light down-btn fw-bold mx-auto my-5 text-center w-auto"
            >
              View more project
            </a>
          </div>
        </div>
        <img
          src={portImg}
          alt="portpng"
          className="mu-portend-img position-absolute left-0 z-3 translate-middle-y"
        />
      </section>
    </div>
  );
};

export default Portfolio;
