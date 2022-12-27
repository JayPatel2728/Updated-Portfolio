import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Projects/>
      <Experience/>
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
