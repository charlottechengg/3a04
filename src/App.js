import "./App.css";
import Homepage from "./components/homepage.js";
import Chalkboard from "./components/Chalkboard.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Memory from "./components/Memory";

function App() {
  // let tmp = true;
  // if (tmp) return (<Auth />);
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Homepage} />
          <Route path="/mathgame" component={Chalkboard} />
          <Route path="/Memory" component={Memory} />
      </div>
    </Router>
  );
}

export default App;
