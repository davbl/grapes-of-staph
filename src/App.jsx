import { useState } from "react";
import Controls from "./components/Controls";
import Result from "./components/Result";

const App = () => {
  const [radioSelections, setRadioSelections] = useState({
    gram: "",
    mannitol: "",
    catalase: "",
  });

  const handleSelectionChange = (test, value) => {
    setRadioSelections({ ...radioSelections, [test]: value });
  };

  // HTML
  return (
    <>
      <h1>Grapes of Staph</h1>

      <main>
        {/* Title + result */}
        <section>
          <h2>Is it S. aureus?</h2>
          <Result radioSelections={radioSelections} />
        </section>

        {/* Controls */}
        <section className="controls">
          <Controls onChange={handleSelectionChange} />
        </section>
      </main>
    </>
  );
};

export default App;
