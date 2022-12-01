import Home from "./Home";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { c } = useSelector((state) => state.custome);
  return (
    <div>
      <h1>App Component: {c}</h1>
      <Home />
    </div>
  );
}

export default App;
