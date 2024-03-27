import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
