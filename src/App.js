import "./App.css";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Desktop />
      <Taskbar />
      <Homepage />
    </div>
  );
}

export default App;
