const Home = () => {
  return (
    <div className="slider">
      <p className="rc-text">RC:153235</p>

      <h2 className="title">
        EARTH ENVIRONMENTAL AND CLIMATE CARE AMBASSADORS LAGOS STATE CHAPTER
        (EECCA)
      </h2>

      <div className="hero2">
        <h1 className="climate-text">
          Climate
          <br />
          <span className="change-text">Change is a</span>
          <br />
          <span className="crisis-text">CRISIS</span>
        </h1>
      </div>

      <h3 className="marquee-text">
        <marquee>
          The future will be more difficult and costly if we don’t take action
          now
        </marquee>
      </h3>

      <h1 className="call-to-action">...Lets save our planet</h1>

      <div className="image-container">
        <img src="/image/world.jpg" alt="World" width="70px" />
      </div>
      <section id="our" className="our-works">
        <h3 style={{ color: "crimson", textAlign: "center" }}>
          OUR PAST PROJECTS
        </h3>
        <h2 style={{ color: "darkgreen", textAlign: "center" }}>
          LITTER/CERTIFICATE OF RECOGNITIONS
        </h2>
        <section className="gallery1">
          {[
            "page11.jpeg",
            "page12.jpeg",
            "page13.jpeg",
            "litter1.jpeg",
            "litter2.jpeg",
            "litter3.jpeg",
          ].map((image, index) => (
            <div key={index}>
              <img
                className="gallery"
                src={`/image/${image}`}
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Home;
