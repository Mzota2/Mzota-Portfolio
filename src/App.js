import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
