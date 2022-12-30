import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Menu} />
          <Route path="/" exact component={About} />
          <Route path="/" exact component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
