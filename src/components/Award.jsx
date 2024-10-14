import "./../assets/css/award.css";
import { awards } from "../assets/data/data";
const Award = () => {
  return (
    <div>
      <section className="award-section">
        <div className="container">
          <h1 className="d-inline-block">MY AWARDS</h1>
          <img src="./image/awardside.png" alt="" className="award-side-img" />
          <div className="row gap-3 p-4 d-flex justify-content-center">
            {awards.map((item) => (
              <div className="card card-1 col-2" key={item.id}>
                <div className="card-body text-center">
                  <img src={item.imgUrl} alt="" className="" />
                  <p className="card-title">{item.title}</p>
                  <span>{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
