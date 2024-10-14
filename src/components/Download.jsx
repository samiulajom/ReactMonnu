
import "./../assets/css/download.css";
const Download = () => {
  return (
    <section className="mu-download  position-relative">
      <div className="mu-line-main d-flex justify-content-between ">
        <div className="mu-line line-1 "></div>
        <div className="mu-line line-2"></div>
        <div className="mu-line line-3 "></div>
      </div>
      <div className="container pe-0 me-0 ">
        <div className="row me-0 ">
          <div className="col-12 mu-down-left py-5 ">
            <h1 className=" fw-bold text-light z-3 col-10">
              MODERN ENVATO TEMPLATE FOR ART, DESIGN AND <span>CREATIVE</span>
            </h1>
            <ul className="d-flex gap-3 list-none py-3 ps-0 flex-wrap">
              <li>
                <h2 className="text-light">25K</h2>
                <p>
                  PROJECT <br />
                  COMPLETED
                </p>
              </li>
              <li>
                <h2 className="text-light">10+</h2>
                <p>
                  TEAM <br />
                  Experience
                </p>
              </li>
              <li>
                <h2 className="text-light">26+</h2>
                <p>
                  AWARD <br />
                  ACHEVMENT
                </p>
              </li>
            </ul>
           <a href="" className=" btn rounded-0 text-uppercase py-3 px-5 text-light down-btn">Download cv</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
