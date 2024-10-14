import React from "react";
import "./../../assets/css/page3/search.css";
import searchImg from "../../assets/image/page3/searchicon .png";
const Seacrch = () => {
  return (
    <div>
      <form action="" method="get" className="search-container position-relative ">
        <input type="text" placeholder="Search here" className="search-input w-100 border-0 bg-transparent" />
        <button type="submit" className="search-icon position-absolute top-50 end-0 translate-middle-y border-0">
          <img src={searchImg} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Seacrch;
