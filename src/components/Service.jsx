import React from "react";
import "./../assets/css/service.css";
import { services } from "./../assets/data/data";
import currentImg from "./../assets/image/services/current.png";
import guraniImg from "./../assets/image/services/gurani.png";
const Service = () => {
  return (
    <div>
      <section className="mu-service-section py-5 position-relative">
        <div className="service-bg1 position-absolute start-0  z-1">
          <img src={currentImg} alt="currentbg" />
        </div>
        <div className="service-bg2 position-absolute end-0 z-1 ">
          <img src={guraniImg} alt="" />
        </div>
        <div className="container">
          <div className="row mu-service-header">
            <div className="col-12">
              <p className="text-uppercase">SERVICS</p>
              <h2 className="text-light text-uppercase fw-bold">
                My Expertise Area
              </h2>
            </div>
          </div>
          <div className="mu-services">
            {services.map((item) => (
              <div
                className="row mu-service-item d-flex flex-column flex-sm-column flex-md-row justify-content-between mu-low-border"
                key={item.id}
              >
                <div className="col-12 col-sm-12 col-md-3">
                  <h3 className="text-light fw-bold">
                    {item.name} <br />
                    {item.dep}
                  </h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 text-center text-sm-center text-md-start">
                  <p>{item.des}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-3 mu-service-indicator mx-sm-auto mx-auto mx-md-init">
                  <a href="#">
                    <span className="service-img"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
