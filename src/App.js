
import Header from "./components/header/header";
import Topcontainer from "./components/topcontainer/topcontainer";
import Aboutcontainer from "./components/aboutcontainer/aboutcontainer";
import Projectcontainer from "./components/projectcontainer/projectcontainer";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Topcontainer/>
      <Aboutcontainer/>
      <Projectcontainer/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
