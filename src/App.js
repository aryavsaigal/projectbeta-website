import "./App.css";
import Taskbar from "./components/main/Taskbar";
import Desktop from "./components/main/Desktop";
import Homepage from "./components/home/Homepage";

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
