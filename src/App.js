import "./css/App.css";
import "./css/Mobile.css";
import Taskbar from "./components/main/Taskbar";
import Homepage from "./components/home/Homepage";
import LoadingScreen from "./components/main/LoadingScreen";
/**
 Hlo there! Looks like you are editing the source files for the website.
 I have tried to create a proper documentation of the code whenever necessary
 and refactored some variables/functions so the codebase may be updated conveniently

 Do note that it is ncessary to have some knowledge of React when going through the code,
 as some parts utilize logics derived from React that may not be understood by javascript alone.

 Hope the documentation is useful. Please reach out to me in case you have any suggestions.

 Change the status quo!

- Suyash Chandel
*/

function App() {
  // Important things to be logged in the console, inclusing necessary attribution to the icons
  // Unless the icons are replaced, deletion of logs below are not recommended
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
    // Initializes three core components
    <div className="App">
      <Taskbar />
      <Homepage />
      <LoadingScreen />
    </div>
  );
}

export default App;
