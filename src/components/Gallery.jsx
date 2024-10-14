import { useEffect, useState } from "react";
import "./../assets/css/portfolio.css";
import { gallary, gallaryBtn } from "./../assets/data/data";

const Gallery = () => {
  const [data, setData] = useState([]);
  // const [collection, setCollection] = useState([]);
  useEffect(() => {
    setData(gallary);
    // setCollection([...new Set(gallary.map((item) => item.title))]);
  }, []);
  const galleryFilter = (itemData) => {
    const filterData = gallary.filter((item) => item.title == itemData);
    setData(filterData);
  };
  return (
    <div>
      <div className="galleryWrapper ">
        <div className="mu-port-nav d-flex  justify-content-center  flex-column flex-sm-column flex-md-row my-3">
          <a
            href="#"
            className="text-uppercase fw-medium "
            onClick={(e) => {
              e.preventDefault();
              setData(gallary);
            }}
          >
            All
          </a>

          {gallaryBtn.map((item) => (
            <a
              href="#"
              className="text-uppercase fw-medium "
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                galleryFilter(item.title);
              }}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="mu-port-img">
          {/* {data.map((item) => (
            <div className="galleryItem" key={item.id}>
              <img src={item.imgUrl} alt="" />
            </div>
          ))} */}
          {data.map((item) => (
            <div className={`portfolio-item`} key={item.id}>
              <img src={item.imgUrl} alt={item.imgUrl} />
              <div className="overlay">{item.overlay}</div>
              <div className="overlay-2">
                {item.overlay2} <br />
                <span>{item.brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
