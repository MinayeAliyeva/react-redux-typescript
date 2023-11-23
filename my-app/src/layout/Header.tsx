
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header id="header">
      <Link className="link" to=''>Home</Link>
      <Link className="link" to='about'>About</Link>
      <Link className="link" to='users'>Users</Link>
    </header>
  )
}

export default Header