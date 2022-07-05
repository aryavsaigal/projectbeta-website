import "./App.css";
import "./Mobile.css";
import Taskbar from "./components/main/Taskbar";
import Homepage from "./components/home/Homepage";
import LoadingScreen from "./components/main/LoadingScreen";

function App() {
  console.log(
    `What are you doing here 'inspecting the element'? lol. Change the status quo`
  );
  console.log(`UIcons by Flaticon https://www.flaticon.com/uicons`);
  console.log(
    `File & Folder icons by DinosoftLabs - Flaticon https://www.flaticon.com/packs/file-folder-13`
  );
  console.log(
    `Desktop computer icons by Flat Icons - Flaticon https://www.flaticon.com/free-icons/desktop-computer`
  );
  return (
    <div className="App">
      <Taskbar />
      <Homepage />
      <LoadingScreen />
    </div>
  );
}

export default App;
