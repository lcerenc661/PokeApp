const LandingHeader = () => {
  return (
    <div className="hero h-screen" style={{backgroundImage: 'url(/hero.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">PokeAPP</h1>
      <p className="mb-5">Application using the well known Poke Api</p>
      <a href="#landing-container"><button className="btn ">Get Started</button></a>
    </div>
  </div>
</div>
  );
};
export default LandingHeader;
