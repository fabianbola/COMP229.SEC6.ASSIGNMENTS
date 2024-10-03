import { Outlet, NavLink, Link } from "react-router-dom";
import logo from '../../assets/Logo.jpg';
import './Header.css';

function Header(){
    return(
        <>
            <center>
              <Link to="/">
                <img className='logo' src={logo} alt="Logo image" />
              </Link>
            </center>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            
            <nav className="navbar">
              <ul className="nav-list">
                <li>
                  <NavLink to="/">
                    <i> </i> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i></i> About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services">
                    <i></i> Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects">
                    <i></i> Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactme">
                    <i></i> Contact me
                  </NavLink>
                </li>
              </ul>  
            </nav>
          </div>
          <Outlet />
        </>







    );
}

export default Header;