import React from "react";
import "./../../assets/css/page3/catagory.css";
import { catagoryList } from "../../assets/data/data";
const Catagory = () => {
  return (
    <div>
      <div className="catagories p-4">
        <h2 className="text-light fw-medium">Catagories</h2>
        <ul className=" py-4 px-0">
          {catagoryList.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catagory;
