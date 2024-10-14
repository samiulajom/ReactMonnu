import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./../assets/css/progressbar.css";
import { skillprogress } from "./../assets/data/data";
const MuProgressbar = () => {
  const option = {
    width: "90%",
    height: "3px",
    bgColor: "#49dc87",
    labelAlignment: "right",
    labelColor: "#ffffff",
    labelSize: "15px",
    animateOnRender: true,
    className: "samiul fw-bold",
    borderRadius: "0",
    baseBgColor: "#37393e",
    transitionDuration: "2s",
  };
  return (
    <section className="progress-items w-100">
      {skillprogress.map((item) => (
        <div className="progress-item mb-3" key={item.id}>
          <p className="text-uppercase fw-medium text-light mb-1 fs-6">
            {item.name}
          </p>
          <ProgressBar {...option} completed={item.value} />
        </div>
      ))}
    </section>
  );
};

export default MuProgressbar;
