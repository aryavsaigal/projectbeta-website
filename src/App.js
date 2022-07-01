import "./App.css";
import "./Mobile.css";
import Taskbar from "./components/main/Taskbar";
import Homepage from "./components/home/Homepage";
import LoadingScreen from "./components/main/LoadingScreen";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <Homepage />
      <LoadingScreen />
    </div>
  );
}

export default App;
