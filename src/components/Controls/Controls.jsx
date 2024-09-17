import "./controls.css";
import MolecularMethods from "./MolMethods/MolecularMethods";
import TraditionalMethods from "./TradMethods/TraditionalMethods";
import ResetBtn from "./ResetBtn/ResetBtn";

const Controls = () => {
  // Render
  return (
    <section className="controls">
      <ResetBtn />
      <div className="methods">
        <MolecularMethods />
        <TraditionalMethods />
      </div>
    </section>
  );
};

export default Controls;
