import React from "react";
import "./../../assets/css/page3/personal.css";
import gentalMan from "./../../assets/image/page3/gentelman.png";
const User = () => {
  return (
    <div>
      <div className="mu-profile py-5">
        <h2 className="text-light fw-medium mb-3">Comments(01)</h2>
        <div className="d-flex flex-column flex-md-row gap-3">
          <img
            src={gentalMan}
            alt="gentelman"
            className=" rounded-circle  img-fluid"
          />
          <div className="person-content">
            <h3 className="text-light fw-medium fs-5">Robert Piterson</h3>
            <p className=" text-secondary fs-6">
              Curabitur luctus nisl in justo maximus egestas. Curabitur sit amet
              sapien vel nunc molestie pulvinar at vitae quam. Aliquam lobortis
              nisi vitae congue consectetur. Aliquam et quam non metus
            </p>
            <a href="#">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
