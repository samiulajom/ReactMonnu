
import "./../assets/css/contactForm.css";
const ContactForm = () => {
  return (
    <div>
      <form action="#" method="get">
        <div className="mu-form-info d-flex flex-column flex-md-row ">
          <div className="col-6">
            <label
              htmlFor="username"
              className="text-light text-uppercase fw-medium mb-3"
            >
              Name
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              id="username"
              required
              className="ps-3 border-0  "
            />
          </div>
          <div className="col-6 ">
            <label
              htmlFor="useremail"
              className="text-light text-uppercase fw-medium mb-3"
            >
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="useremail"
              placeholder="Your Email"
              required
              className="border-0  ps-3"
            />
          </div>
        </div>
        <div className="mu-form-info d-flex mt-3 mb-3 flex-column flex-md-row ">
          <div className="col-6 ">
            <label
              htmlFor="userphone"
              className="text-light text-uppercase fw-medium mb-3"
            >
              Phone(Optional)
            </label>
            <br />
            <input
              type="tel"
              placeholder="Your Phone"
              name="userphone"
              id="userphone"
              className="ps-3 border-0  "
            />
          </div>
          <div className="col-6 ">
            <label
              htmlFor="usersubject"
              className="text-light text-uppercase fw-medium mb-3"
            >
              Subject
            </label>
            <br />
            <input
              type="subject"
              name="subject"
              id="usersubject"
              placeholder="Your subject"
              className="ps-3 border-0  "
            />
          </div>
        </div>
        <div>
          <div className="col-12 message">
            <label
              htmlFor="message"
              className="text-light text-uppercase fw-medium mb-3"
            >
              Message
            </label>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              className="col-12 p-3 border-0  mb-2 w-100 w-md-75"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="submit-btn fw-bold text-uppercase border-0 py-4 px-5 mb-3"
        >
          Submit message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
