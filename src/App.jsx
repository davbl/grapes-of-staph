import Result from "./components/Result";
import TraditionalMethods from "./components/TraditionalMethods";
import MolecularMethods from "./components/MolecularMethods";
import ResetBtn from "./components/ResetBtn";
import { Grape } from "lucide-react";

const App = () => {
  // Render
  return (
    <>
      <header>
        <Grape size={18} color="#9E70CC" strokeWidth={2.25} />
        <h1>Grapes of Staph</h1>
      </header>

      <main>
        <section className="hero">
          {/* Hero text */}
          <h2>Is it S. aureus?</h2>
          <Result />
        </section>

        {/* Methods */}
        <section className="controls">
          <MolecularMethods />
          <TraditionalMethods />
        </section>

        <ResetBtn />
      </main>
    </>
  );
};

export default App;
