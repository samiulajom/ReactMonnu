import "./../assets/css/carousel.css";
import { brand } from "./../assets/data/data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Carosul = () => {
  const option = {
    loop: true,
    margin: 160,
    nav: false,
    items: 3,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 3000,
    center: true,
    dots: false,
    responsive: {
      0: {
        margin: 30,
        items: 3,
      },
      600: {
        margin: 100,
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div>
      <section className="mu-brand py-4 d-flex justify-content-center mx-auto">
        <OwlCarousel className=" mu-brand-items owl-theme" loop {...option}>
          {brand.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imgUrl} alt={item.name} />
            </div>
          ))}
        </OwlCarousel>
      </section>
    </div>
  );
};

export default Carosul;
