import React from "react";
import "./../../assets/css/page3/latestpost.css";
import { latestPost } from "../../assets/data/data";
const LatestPost = () => {
  return (
    <div>
      <div className="latest-post my-4 p-4">
        <h2 className="text-light fw-semibold ">Our Latest Post</h2>

        {latestPost.map((item) => (
          <div className="lastestpost-item d-flex my-4" key={item.id}>
            <span>
              <a href={item.link}>
                <img src={item.imgUrl} alt={item.name} />
              </a>
            </span>
            <div className=" ms-3">
              <p className="fs-6 text-secondary mb-2">{item.time}</p>
              <h4 className="fs-6 fw-medium text-light">{item.des}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
