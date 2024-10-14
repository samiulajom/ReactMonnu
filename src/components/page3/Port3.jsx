import React from "react";
import "./../../assets/css/page3/port3.css";
import meetImg from "./../../assets/image/page3/meeting.png";
import { portList } from "../../assets/data/data";
const Port3 = () => {
  return (
    <div>
      <div className="mu-portdesign ">
        <h2 className="text-light fs-1 fw-medium text-capitalize my-4">
          Portfolio Website Design
        </h2>
        <div className="port-head d-flex flex-column flex-md-row row-gap-4">
          <div className="port-img text-center">
            <img src={meetImg} alt="meeting" className="img-fluid" />
          </div>
          <div>
            {portList.map((item) => (
              <p className=" text-secondary fs-6" key={item.id}>
            {item.des}
              </p>
            ))}
          </div>
        </div>
        <p className=" text-secondary fs-6">
          vitae lobortis eros purus non augue. Nullam molestie augue diam,
          scelerisque porta dolor mollis a. Cras condimentum elementum eros at
          finibus. pharetra condimentum sagittis. Donec
        </p>
      </div>
    </div>
  );
};

export default Port3;
