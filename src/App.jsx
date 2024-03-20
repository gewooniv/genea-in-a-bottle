import logo from "./assets/bottle.png";
import Rolodex from "./components/Rolodex";

export default function App() {
  return (
    <div className="flex justify-center text-3xl text-bold">
      <img src={logo} width={100} height={100} />
      <h1>Eijgenraam</h1>
      <Rolodex />
    </div>
  );
}
