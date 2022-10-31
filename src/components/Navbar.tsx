import shiwonwan from "../images/shiwon.png"
import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <>
      <nav>
        <Link className="logo" to="/"><img src={shiwonwan} alt="My logo" /></Link>
        <ul>
          <li><Link to="/" className="noStyle">Home</Link></li>
          <li><a href="#experience">Experience</a></li>
          <li><Link to="/contact" className="noStyle">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
