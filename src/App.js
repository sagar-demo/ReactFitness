import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Program";
import Reasons from "./components/Reasons/Reason";
import Plans from "./components/Plans/plan";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
