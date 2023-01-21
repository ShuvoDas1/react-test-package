import "./App.css";
import { Button } from "./lib";

function App() {
  return (
    <div className="App">
      <Button
        label="Enter"
        type="button"
        handleClick={(e) => console.log("clicked button")}
        kind="primary"
      ></Button>
    </div>
  );
}

export default App;
