import React from "react";
import "./../../assets/css/page3/blogTag.css";
import { blogTagList } from "../../assets/data/data";
const BlogTag = () => {
  return (
    <div>
      <div className="mu-side-tag my-5 p-3">
        <h2 className="text-light fw-medium pb-3">Tag</h2>
        <ul className="d-flex flex-wrap row-gap-4 column-gap-3 ">
          {blogTagList.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogTag;
