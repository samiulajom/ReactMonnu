import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../../assets/css/page3/share.css";
import { shareLink } from "../../assets/data/data";
const Share = () => {
  return (
    <div>
      <div className="tag-logo d-flex flex-column flex-sm-row align-items-center">
        <h3 className="text-light fs-4">Shares:</h3>
        <ul className="d-flex align-items-center column-gap-1 ps-2">
          {/* <FontAwesomeIcon icon={faPinterestP} /> */}

          {shareLink.map((item) => (
            <li
              className="d-flex justify-content-center align-items-center rounded-circle"
              key={item.id}
            >
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Share;
