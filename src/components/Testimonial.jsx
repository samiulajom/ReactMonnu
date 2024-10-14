import React from "react";
import "./../assets/css/testimonial.css";
import handImg from "./../assets/image/testimonia/testimonial.png";
import personImg from "./../assets/image/testimonia/testimonial-person.png";
import { clicntSay } from "./../assets/data/data";
const Testimonial = () => {
  return (
    <div>
      <section className="mu-testimonial p-5">
        <div className="container pt-3 pb-5">
          <div className="row testimonial-header pt-5 pb-2">
            <p className="col-12 text-center">TESTIMONIAL</p>
            <h2 className="col-12 text-center text-light fw-bold text-uppercase">
              WHAT My CLIENT SAY
            </h2>
          </div>

          <div className="row">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  <span>
                    <img src={personImg} alt="" className="img1" />
                    <h3>Jean Stone</h3>
                    <p>Designer</p>
                  </span>
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                >
                  <span>
                    <img src={personImg} alt="" className="img1" />
                    <h3>Jean Stone</h3>
                    <p>Designer</p>
                  </span>
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                >
                  <span>
                    <img src={personImg} alt="" className="img1" />
                    <h3>Jean Stone</h3>
                    <p>Designer</p>
                  </span>
                </button>
              </div>

              <div className="carousel-inner testimonial-carousel ">
                <div className="carousel-item active text-center">
                  <p className="text-light fw-medium">
                    "We cannot understand how we lived without the services of
                    your company.It's the perfect solution for creating a cool
                    portfolio! The best AGHT digital agency!"
                  </p>
                </div>

                {clicntSay.map((item) => (
                  <div
                    className="carousel-item text-center '${muActive}'"
                    key={item.id}
                  >
                    <p className="text-light fw-medium">{item.comment}</p>
                  </div>
                ))}
              </div>

              <div className="carouser-corner-image">
                <img src={handImg} alt="handImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
