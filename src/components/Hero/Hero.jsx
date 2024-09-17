import "./hero.css";
import Result from "./ResultRow/Result";

const Hero = () => {
  // Render
  return (
    <section className="hero">
      {/* Hero text */}
      <h2>Is it S. aureus?</h2>
      <Result />
    </section>
  );
};

export default Hero;
