import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Timer start={1} end={20} />
    </div>
  );
}

export default App;
