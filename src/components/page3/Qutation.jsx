import React from "react";
import "./../../assets/css/page3/qutaion.css";
import qutaionImg from "./../../assets/image/page3/quoteicon.png";
const Qutation = () => {
  return (
    <div>
      <div className="mu-qutation text-center p-3 my-4">
        <div className=" rounded-circle mx-auto align-content-center">
          <img src={qutaionImg} alt="quoteicon" />
        </div>
        <p className="text-center fs-6 text-secondary">
          These types of conversations are very repetitive, and even when a
          decision is made, they don’t feel like time with the team is well
          spent. There are so many questions to be answered.
        </p>
      </div>
    </div>
  );
};

export default Qutation;
