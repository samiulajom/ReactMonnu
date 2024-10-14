import "./../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "./../assets/data/data";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div>
      <section className="mu-contact pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
              <div className="mu-contact-header pb-4">
                <p className=" text-secondary fw-medium ">CONTACT WITH ME</p>
                <h2 className="main-title text-light fw-bold">GET IN TOUCH</h2>
                <p className="mini-cap">
                  Donot be afraid man! just say hello and fill your information
                </p>
              </div>
              <div className="contact-items">
                {contacts.map((item) => (
                  <div
                    className={`contact d-flex gap-4 mb-3 ${item.className}`}
                    key={item.id}
                  >
                    <div className="contact-icon p-3 d-flex text-center align-middle rounded-circle">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div>
                      <h3 className="text-light fw-medium">{item.name}</h3>
                      <p>{item.link}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
