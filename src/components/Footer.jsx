import { Link } from "react-router-dom";
import "./../assets/css/footer.css";
import fotterEmail from "./../assets/image/footer/footeremail.png";
import { footNav } from "./../assets/data/data";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mu-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center pt-5 pb-3">
                <p className="text-uppercase">CONTACT WITHOUT HESITATE</p>
                <h2 className="fw-bold">Got a project? Let’s talk!</h2>
                <div className="footer-email d-flex justify-content-center  gap-2 mt-3 flex-column align-items-center flex-sm-row">
                  <img
                    src={fotterEmail}
                    alt="email"
                    className="footer-email-img rounded-circl"
                  />
                  <h3 className="text-light mt-3">Hello@monnu.com</h3>
                </div>
              </div>
            </div>

            <div className="footer-nav col-12">
              <ul className="d-flex gap-3 justify-content-sm-end justify-content-center">
                {footNav.map((item) => (
                  <li key={item.id} className="list-none">
                    <Link to={item.link} className="text-light">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
