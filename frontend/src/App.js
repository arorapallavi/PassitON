
import './App.css';
import Navbar from "./components/Navbar";
import Uploadbook from "./pages/uploadform.js";
import Searchbook from "./pages/searchbook.js";
import Searchingbook from "./pages/searchingbook.js";
import Displaybook from "./pages/displaybooks.js";
import Home from './pages/Home';
import Login from './pages/login';	
import Signup from './pages/signup';
import BookDet from './pages/Book_details';
import End from './pages/End';
import Cart from './pages/Cart';
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
		<Route path="/searchbook/searchres/:id" element={<Searchingbook/>} />
		<Route path="/searchbook/searchres/:sem/book/:id" element={<BookDet/>}/>
		<Route path="/uploadbook" element={<Uploadbook/>} />
		<Route path="/display" element={<Displaybook/>}/>
		<Route path="/display/book/:id" element={<BookDet/>}/>
		<Route path="/cart" element={<Cart/>} />	
		<Route path="/end" element={<End/>}	/>	
		
	</Routes>
  </Router>

  );
}

export default App;
