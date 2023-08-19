import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Navbar } from './components/Homepage/Navbar';
import $ from "jquery";
require("jquery");

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
