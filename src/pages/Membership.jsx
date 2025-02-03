const Membership = () => {
  return (
    <div className="hero-slider">
      {/* Owl Carousel Integration */}
      {/* <OwlCarousel className="owl-theme" loop margin={10} nav items={1}> */}
      <div
        className="item"
        style={{
          backgroundImage: "url('./image/page10.jpg')",
          padding: "50px",
        }}
      >
        {/* Membership Registration Section */}
        <h1 className="regist text-white text-4xl font-bold mb-6">
          Membership Registration
        </h1>

        <form
          action="#membership"
          method="POST"
          className="registration-form p-6 bg-white shadow-lg rounded"
        >
          <label htmlFor="name">
            <i className="fa-solid fa-user"></i> Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="block w-full p-2 mb-4 border rounded"
            required
          />

          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i> Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="block w-full p-2 mb-4 border rounded"
            required
          />

          <label htmlFor="password">
            <i className="fa-solid fa-key"></i> Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            className="block w-full p-2 mb-4 border rounded"
            required
          />

          <label htmlFor="membership">
            <i className="fa-solid fa-users"></i> Membership Type:
          </label>
          <select
            id="membership"
            name="membership"
            className="block w-full p-2 mb-4 border rounded"
            required
          >
            <option value="basic">EECCA</option>
            <option value="premium">Mashal</option>
            <option value="vip">Both</option>
          </select>

          <button
            type="submit"
            className="regist-btn bg-crimson text-white w-full py-2 rounded hover:bg-darkred"
          >
            Register
          </button>
        </form>
      </div>
      {/* </OwlCarousel> */}
    </div>
  );
};

export default Membership;
