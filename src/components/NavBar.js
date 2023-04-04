import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
  <ul className="navbar">
    <li><NavLink  style={{textDecoration: 'none'}} to="/">Home |</NavLink></li>
    <li><NavLink  style={{textDecoration: 'none'}} to="/calculator">Calculator |</NavLink></li>
    <li><NavLink  style={{textDecoration: 'none'}} to="/quotes">Quotes</NavLink></li>
  </ul>
  )
}