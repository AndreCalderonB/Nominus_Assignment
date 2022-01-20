import logo from "./logo.svg";
import "./assets/css/App.css";
import Story from "./components/Story";
function App() {
  return (
    <div className="App">
      <div className="backGround">
        <Story title="Story Title" episode="Episode 1" />
      </div>
    </div>
  );
}

export default App;
