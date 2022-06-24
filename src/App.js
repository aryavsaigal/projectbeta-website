import "./App.css";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";

function App() {
  return (
    <div className="App">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
