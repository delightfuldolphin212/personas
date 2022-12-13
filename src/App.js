import "./App.css";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Personas from "./Personas";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Personas />
      <h6 className="footer"> &#xA9; 2022 My CS1300 Portfolio</h6>
    </div>
  );
}

export default App;
