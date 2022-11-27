import logo from './logo.svg';
import RandomChar from './pages/randomChar';
import './App.css';
import NavBar from "./navBar.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RandomChar />
    </div>
  );
}

export default App;
