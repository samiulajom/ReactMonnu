import React from "react";
import "./../assets/css/page2/singnature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Singnature = () => {
  return (
    <div>
      <section className="mu-axi p-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-light fw-bold fs-1">Axi signaturex</h2>
            </div>
          </div>
          <div className="row mu-axi-catagory py-4  my-2 mx-auto border-bottom border-top border-secondary border-opacity-50 h-100 d-flex  flex-column flex-sm-column flex-md-row ">
            <div className="col-12 col-sm-12 col-md-3">
              <p className="text-secondary text-uppercase">published:</p>
              <h1 className=" fs-4 text-light fw-medium">April 20, 2023</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-3">
              <p className="text-secondary text-uppercase">catagory:</p>
              <h1 className="fs-4 text-light fw-medium">Design/Ideas</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-3">
              <p className="text-secondary text-uppercase">client:</p>
              <h1 className="fs-4 text-light fw-medium">Hopsiteme</h1>
            </div>

            <div className="col-12 col-sm-12 col-md-3 mu-axi-logo my-auto ">
              <ul className="d-flex justify-content-around">
                <li className="facebook d-flex justify-content-center align-items-center rounded-circle">
                  <a href="#" className="text-light">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="twitter  d-flex justify-content-center align-items-center rounded-circle">
                  <a href="#" className="text-light">
                    <FontAwesomeIcon icon={faTwitter} bounce/>
                  </a>
                </li>
                <li className="ingstragram d-flex justify-content-center align-items-center rounded-circle">
                  <a href="#" className="text-light">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="linkin  d-flex justify-content-center align-items-center rounded-circle">
                  <a href="#" className="text-light">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Singnature;
