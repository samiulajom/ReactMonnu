import "./../assets/css/skillprogress.css";
import { skills } from "./../assets/data/data";
import MuProgressbar from "./Progressbar";
const SlickProgresBar = () => {
  return (
    <div>
      <section className="mu-skill py-5">
        <div className="container">
          <div className="row d-flex ">
            <h2 className="fw-bold text-light text-uppercase pb-5">
              MY SKILL AND EXPERIENCE
            </h2>
            {/* <div className="skill-line"></div>  */}
            <div className="skill-part1 col-12 col-sm-12 col-md-6 ps-3 position-relative  ">
              <ul>
                {skills.map((skill) => (
                  <li key={skill.id}>
                    <p>{skill.year}</p>
                    <h3 className="text-light">{skill.course}</h3>
                    <span>{skill.institue}</span>
                    <p className="pt-3">{skill.des}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skill-part2 col-12 col-sm-12 col-md-6 d-flex align-items-center   my-5 my-md-0">
              <MuProgressbar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlickProgresBar;
