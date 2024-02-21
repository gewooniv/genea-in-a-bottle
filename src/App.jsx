import logo from "./assets/bottle.png";
import Rolodex from "./components/Rolodex";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src={logo} width={100} height={100} />
      <h1>Eijgenraam</h1>
      <Rolodex />
    </div>
  );
}
