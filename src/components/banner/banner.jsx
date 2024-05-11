const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/zN1nHzP/Rectangle-1-1.png)",
        }}
      >
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-md">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer
            </p>
            <button className="btn btn-accent mr-7">Explore Now</button>
            <button className="btn  btn-ghost border-white ">
              Our feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
