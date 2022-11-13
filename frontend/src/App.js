
import './App.css';
import Navbar from "./components/Navbar";
import Uploadbook from "./pages/uploadform.js";
import {
  BrowserRouter as Router,   
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
  <Navbar/>
	<Routes>
		<Route path="/uploadbook" element={<Uploadbook/>} /> 
	</Routes>
  </Router>

  );
}

export default App;
