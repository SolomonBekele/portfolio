import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 item-ceenter">
        <img src={logo} alt="no" className="mx-2 w-10"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaTwitterSquare/>
        <FaInstagram/>
    </div>
  </nav>
  )
}

export default Navbar