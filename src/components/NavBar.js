export default function NavBar() {
  return (
  <ul className="navbar">
    <li><a style={{textDecoration: 'none'}} href="/">Home |</a></li>
    <li><a style={{textDecoration: 'none'}} href="/calculator">Calculator |</a></li>
    <li><a style={{textDecoration: 'none'}} href="/quotes">Quotes</a></li>
  </ul>
  )
}