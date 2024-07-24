import { useState } from "react";
import Controls from "./components/Controls";
import Result from "./components/Result";

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
      {/* Logo */}
      <h1>Grapes of Staph</h1>

      <main>
        {/* Title + result */}
        <section>
          <h2>Is it S. aureus?</h2>
          <Result radioSelections={radioSelections} />
          {/* pass radio selections to calculate result */}
        </section>

        {/* Controls */}
        <section className="controls">
          <Controls onChange={handleSelectionChange} />
          {/* onChange, Controls component can call handleSelectionChange */}
        </section>
      </main>
    </>
  );
};

export default App;
