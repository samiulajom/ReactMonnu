
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bannerImg from "../assets/image/hero/strokcirle.png";
import "./../assets/css/hero.css";
import startImg from "../assets/image/hero/starShape.png";
import scrollImg from "../assets/image/hero/scrolldownarrow.png";
import personImg from "../assets/image/hero/personimage.png";
import moonImg from "../assets/image/hero/Layermoon.png";
import shape from "../assets/image/hero/shape.png";
const Hero = () => {
  return (
    <section className="mu-heroParent  position-relative">
      <img src={bannerImg} alt="bannerImg" className="img-fluid b-img w-100" />

      <div className="container">
        <div className="row ">
          <div className="col-12 ">
            <div className="mu-hero-overlay">
              <img
                src={startImg}
                alt="startImg"
                className="position-absolute star-shape  img-fluid"
              />
              <img
                src={moonImg}
                alt="moonImg"
                className="position-absolute moon-shape img-fluid "
              />
              <img
                src={shape}
                alt="shape"
                className="position-absolute hero-shape img-fluid"
              />
              <img
                src={scrollImg}
                alt="scrollImg"
                className="position-absolute  start-50 translate-middle scrollMouse img-fluid"
              />
            </div>
            <div className="central-area position-absolute  top-50 start-50 translate-middle ">
              <h2 className="position-absolute text-light text-uppercase z-n1">
                Web
              </h2>
              <img
                src={personImg}
                alt="person"
                className="img-fluid hero-person  w-75 ps-5"
              />
              <h2 className="position-absolute text-light text-uppercase z-1">
                Designer
              </h2>
            </div>
            <div className="mu-hero-bottom d-flex gap-3 align-items-center position-absolute bottom-0">
              <FontAwesomeIcon icon={faPhone} color="#fff" size="lg" />
              <div>
                <h3 className="text-dark bg-light  p-1 email">vap@gmail.com</h3>
                <FontAwesomeIcon icon={faEnvelope} color="#fff" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
