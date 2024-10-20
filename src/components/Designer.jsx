import "./../assets/css/desinger.css";
import designerImg from "../assets/image/designer/secondperson.png";
const Designer = () => {
  return (
    <div>
      <section className="mu-designer ">
        <div className="container">
          <div className="row d-flex ">
            <div className="mu-designer-part1 col-12 col-sm-12 col-md-6 position-relative z-3">
              <img src={designerImg} alt="" className="img-fluid" />
              <div className="d-flex justify-content-center ">
                <h1 className="fw-bold">14+</h1>
                <p>
                  Years of <br />
                  Experience
                </p>
              </div>
            </div>
            <div className="mu-designer-part2 col-12 col-sm-12 col-md-6 position-relative d-flex flex-column ps-md-5 ps-sm-0 ps-0">
              <h2 className="text-light text-uppercase fw-bold">
                Product Designer
              </h2>
              <p>
                Hi, my name is <span>David Clacrk</span> and I began using
                WordPress when firs began. I have spent most of my waking hours
                for the last ten years designing,programming and operating
                Wordpress sites go beyond with exclusive desingner.
              </p>
              <div className="designer-details  pt-1">
                <div className="info">
                  <span className="label">Name</span>
                  <span className="value">David Clark</span>
                </div>
                <div className="info">
                  <span className="label">Nationality</span>
                  <span className="value">Germany</span>
                </div>
                <div className="info">
                  <span className="label">Phone</span>
                  <span className="value">+123 43676 46575</span>
                </div>
                <div className="info">
                  <span className="label">Email</span>
                  <span className="value">billa@gmail.com</span>
                </div>
                <div className="info">
                  <span className="label">Experience</span>
                  <span className="value">10+ Years</span>
                </div>
                <div className="info">
                  <span className="label">Freelance</span>
                  <span className="value">Available</span>
                </div>
                <div className="info">
                  <span className="label">Skype</span>
                  <span className="value">david,clarck28</span>
                </div>
                <div className="info">
                  <span className="label">Language</span>
                  <span className="value">German, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Designer;
