const LandingHeader = () => {
  return (
    <div className="hero h-screen" style={{backgroundImage: 'url(/pikawallpaper.jpg)'}}>
  <div className="hero-overlay bg-[#ffdd59] bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-[#0000005b] p-12 rounded-2xl">
      <h1 className="mb-5 text-5xl font-bold text-[#fff8de]">PokeAPP</h1>
      <p className="mb-5  text-[#fff8de]">Application using the well known Poke Api</p>
      <a href="#landing-container"><button className="btn ">Get Started</button></a>
    </div>
  </div>
</div>
  );
};
export default LandingHeader;
