import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js';

function App() {
  // let tmp = true;
  // if (tmp) return (<Auth />);
  return (
    <div className="App">
      <header className="App-header">
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
