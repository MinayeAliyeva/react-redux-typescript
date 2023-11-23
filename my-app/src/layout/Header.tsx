
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header id="header">
      <Link className="link" to=''>Home</Link>
      <Link className="link" to='about'>About</Link>
    </header>
  )
}

export default Header