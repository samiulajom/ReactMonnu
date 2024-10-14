import React from "react";
import "./../../assets/css/page3/details.css";
import newYorkImg from "./../../assets/image/page3/newyorktech.png";
import porfileImg from "./../../assets/image/page3/profile.png";
import tagImg from "./../../assets/image/page3/tagicon.png";
import chatImg from "./../../assets/image/page3/chat.png";
const Details = () => {
  return (
    <div>
      <div className="mu-details-top">
        <div className="details-img overflow-hidden">
          <img src={newYorkImg} alt="newYorkImg" className="img-fluid" />
        </div>
        <div className="mu-img-caption  d-flex flex-column flex-md-row py-4 column-gap-4">
          <div className=" text-secondary fs-6 gap-2 d-flex">
            <a href="#">
              <img src={porfileImg} alt="profileimg" />
            </a>
            <p>By nnsthemer</p>
          </div>
          <div className=" text-secondary fs-6 gap-2 d-flex">
            <a href="#">
              <img src={tagImg} alt="tagImg" />
            </a>
            <p>Designing</p>
          </div>
          <div className=" text-secondary fs-6 gap-2 d-flex">
            <a href="#">
              <img src={chatImg} alt="commentImg" />
            </a>
            <p>02 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
