import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import NavBar from './components/NavBar';
import Mainpage from "./components/mainpage";
import './Apps.css';

function Header() {
  return (
    <div className="nav-container">
      <h1 className="headertitle">Math Magicians</h1>
      <NavBar/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='Calculator' element={<Calculator/>} />
    <Route path='Quotes' element={<Quotes/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
