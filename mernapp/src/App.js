
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          {/* Whenever this end point is hit call the <Home/> element */}
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/createuser" element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;