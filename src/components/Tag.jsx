import "./../assets/css/page2/tag.css";
import arrow1IMG from "./../assets/image/page2/arrow-back.png";
import arrow2IMG from "./../assets/image/page2/arrow-back2.png";
import TagBtn from "./TagBtn";
const Tag = () => {
  return (
    <div>
      <section className="mu-tag pb-5">
        <div className="container">
          {/* <div className="row mu-tag-header pb-5">
            <div className="col-12 d-flex gap-2 flex-column flex-sm-row">
              <h3 className=" fw-medium text-light me-3 align-items-center ">
                Tag:
              </h3>
              <button className="text-light fs-6 border-0">Design</button>
              <button className="text-light fs-6 border-0">Idea</button>
            </div>
          </div> */}
          <TagBtn />
          <div className="row mu-tag-carousel">
            <div className="col-12 col-sm-6 d-flex">
              <div className="tag-img me-3 tag-previous">
                <img src={arrow1IMG} alt="" className="w-100 h-100" />
              </div>
              <div>
                <h3 className="fw-medium text-light mt-3">
                  Ui/Ux Design Conference
                </h3>
                <p>April 5,2023</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-end">
              <div>
                <h3 className="fw-medium text-light mt-3 ">
                  Senior Full Stack Developer
                </h3>
                <p className="float-end">April 5,2023</p>
              </div>
              <div className="tag-img ms-3 tag-next ">
                <img src={arrow2IMG} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tag;
