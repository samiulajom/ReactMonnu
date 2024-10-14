
import "./../assets/css/page2/hero2.css";
import bannerImg from "./../assets/image/page2/banner1.png";
const HeroPage2 = () => {
  return (
    <div>
      <section className="mu-banner position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 mu-banner-img">
              <img src={bannerImg} alt="nannerImg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage2;
