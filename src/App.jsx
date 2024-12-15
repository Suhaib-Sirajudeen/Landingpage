import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Analytics } from "./components/Analytics";
import { NewsLetter } from "./components/NewsLetter";
import { CardContainer } from "./components/CardContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
