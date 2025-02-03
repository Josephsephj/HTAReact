function Contect() {
  return (
    <div className="contact">
      <div>
        <img src="./image/contact pic.jpg" alt="Contact Pic" width="500px" />
      </div>
      <form>
        <div style={{ textAlign: "center" }}>
          <img src="./image/loge eecca.jpg" width="70px" alt="Logo" />
        </div>
        <h2 style={{ textAlign: "center", color: "darkgreen" }}>Contact Us</h2>
        <p style={{ textAlign: "center" }}>
          Have any questions? Reach out to us!
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="block w-full p-2 mb-3 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-crimson text-white w-full py-2 rounded hover:bg-darkred"
          style={{ backgroundColor: "crimson" }}
        >
          Send Message
        </button>
      </form>
      {/* Location Section */}
      <section
        id="location"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div>
          <iframe
            src="https://maps.app.goo.gl/RY16DW5YeJG3EpUD9"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contect;
