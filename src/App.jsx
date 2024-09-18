import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Result from "./components/Result/Result";
import Controls from "./components/Controls/Controls";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Render
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Result />
        <Controls />
      </main>
      <Footer />
    </>
  );
};

export default App;
