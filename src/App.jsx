import { useState } from "react";
import Result from "./components/Result";
import TraditionalMethods from "./components/TraditionalMethods";
// import MolecularMethods from "./components/MolecularMethods";

const App = () => {
  const [radioSelections, setRadioSelections] = useState({
    gram: "",
    mannitol: "",
    catalase: "",
  });

  // update state of radio selections from Controls component
  const handleSelectionChange = (assay, value) => {
    setRadioSelections({ ...radioSelections, [assay]: value });
  };

  // Render
  return (
    <>
      <header>
        <svg
          width="13"
          height="13"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="32"
            cy="45.4286"
            rx="16"
            ry="16"
            transform="rotate(180 32 45.4286)"
            fill="#9D70CC"
          />
          <ellipse
            cx="16"
            cy="18"
            rx="16"
            ry="16"
            transform="rotate(180 16 18)"
            fill="#9D70CC"
          />
          <ellipse
            cx="48"
            cy="18"
            rx="16"
            ry="16"
            transform="rotate(180 48 18)"
            fill="#9D70CC"
          />
          <rect
            x="22.8572"
            y="18"
            width="18.2857"
            height="18.2857"
            fill="#9D70CC"
          />
        </svg>
        <h1>Grapes of Staph</h1>
      </header>

      <main>
        {/* Title + result */}
        <section>
          <h2>Is it S. aureus?</h2>
          {/* pass radio selections to calculate result */}
          <Result radioSelections={radioSelections} />
        </section>

        {/* Methods */}
        <section className="controls">
          {/* onChange, components below can call handleSelectionChange */}
          {/* Molecular methods */}
          {/* <MolecularMethods onChange={handleSelectionChange} />  TODO  */}
          {/* Traditional methods */}
          <TraditionalMethods onChange={handleSelectionChange} />
        </section>
      </main>
    </>
  );
};

export default App;
