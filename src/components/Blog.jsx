import "./../assets/css/blog.css";
import { blogs } from "./../assets/data/data";
const Blog = () => {
  return (
    <div>
      <section className="mu-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mu-blog-header justify-content-center text-center pb-3">
              <p>BLOG & ARTICLE</p>
              <h2 className="text-light fw-bold">RECENT BLOG POST</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogs.map((item) => (
              <div
                className="card col-10 col-sm-6 col-md-4 bg-transparent border-0
                my-3"
                key={item.id}
              >
                <div className=" mu-card-img overflow-hidden position-relative">
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="centered position-absolute text-light top-50 start-50">
                    +
                  </div>
                </div>
                <div className="card-body mt-1">
                  <h5 className="card-title text-light fw-bold">
                    {item.title}
                  </h5>
                  <p className="card-text">{item.des}</p>
                  <a href={item.link} className="text-uppercase fw-bold ">
                    Read more &#x2192;{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
