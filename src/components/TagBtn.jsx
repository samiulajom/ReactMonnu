import React from "react";
import "./../assets/css/page2/tagbtn.css";
const TagBtn = () => {
  return (
    <div>
      <div className="row mu-tag-header ">
        <div className="col-12 d-flex gap-2 flex-column flex-sm-row">
          <h3 className=" fw-medium text-light me-3 align-items-center ">
            Tag:
          </h3>
          <button className="text-light fs-6 border-0">Design</button>
          <button className="text-light fs-6 border-0">Idea</button>
        </div>
      </div>
    </div>
  );
};

export default TagBtn;
