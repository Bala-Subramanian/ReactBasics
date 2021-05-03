import './App.css';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Headers from './components/Headers/Headers';
import PropsAndState from './components/PropsAndState/PropsAndState';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers></Headers>
      </BrowserRouter>

    </div>
  );
}

export default App;
