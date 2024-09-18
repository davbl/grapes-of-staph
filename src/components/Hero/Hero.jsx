import "./hero.css";
import Result from "./ResultRow/Result";

const Hero = () => {
  // Render
  return (
    <section className="hero">
      {/* Hero text */}
      <h1>Is it S. aureus?</h1>
      <Result />
    </section>
  );
};

export default Hero;
