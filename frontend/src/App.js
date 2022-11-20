
import './App.css';
import Navbar from "./components/Navbar";
import Uploadbook from "./pages/uploadform.js";
import Searchbook from "./pages/searchbook.js";
import Displaybook from "./pages/displaybooks.js";
import Home from './pages/Home';
import Login from './pages/login';	
import Signup from './pages/signup';
import Bookdetail from './pages/bookdetail';


import {
  BrowserRouter as Router,   
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
  
	<Routes>
	
		<Route path = "/" element = {<Home />}/>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/signup" element = {<Signup />} />
		<Route path="/searchbook" element={<Searchbook/>} />
		<Route path="/uploadbook" element={<Uploadbook/>} />
		<Route path="/display" element={<Displaybook/>}/>
		<Route path="/display/book/:id" element={<Bookdetail/>}/>
		book/>} />		
		
	</Routes>
  </Router>

  );
}

export default App;
