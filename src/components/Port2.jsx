import "./../assets/css/page2/port.css";
import { gallary } from "./../assets/data/data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Port2 = () => {
  const option = {
    loop: true,
    margin: 10,
    autoplay: true,
    slideBy: 3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <section className="mu-portfolio">
        <div className="container">
          <div className="row port-header">
            <div className="col-12 text-center pb-3">
              <p className=" fs-6 text-secondary text-uppercase">Portfolio</p>
              <h3 className="text-light text-uppercase fw-bold">
                see more project
              </h3>
            </div>
          </div>

          <div className="row">
            <OwlCarousel className="owl-theme" {...option}>
              {gallary.map((item) => (
                <div className={`portfolio-item`} key={item.id}>
                  <img src={item.imgUrl} alt={item.imgUrl} />
                  <div className="overlay">{item.overlay}</div>
                  <div className="overlay-2">
                    {item.overlay2} <br />
                    <span>{item.brand}</span>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Port2;
