import './App.css';
import Navigation from './Components/Navbar/Navbar';
import {Footer} from './Components/Footer/Footer';
import { AllRoutes } from "./Routes/AllRoutes.jsx";
import TopNavbar from "./Components/TopNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavbar />
        <Navigation/>
        <AllRoutes/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
