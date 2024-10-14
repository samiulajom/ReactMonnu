import "./../assets/css/page2/challenge.css";
import { doneList } from "../assets/data/data";
import challengeImg from "./../assets/image/page2/challenge.png";
const Chanllenge = () => {
  return (
    <div>
      <section className="mu-challenge pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-light fw-semibold fs-1">
                The challenge of Project
              </h2>
              <p className=" fs-6  py-2">
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mu-challenge-img">
              <div>
                <img
                  src={challengeImg}
                  alt="challengeImg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 mu-challenge-right mt-5 mt-md-0">
              {doneList.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="bg-light p-2 rounded-circle me-3"
                  />
                  <p>{item.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chanllenge;
