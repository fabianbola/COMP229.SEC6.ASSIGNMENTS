import { Outlet, NavLink, Link } from "react-router-dom";
import logo from '../../assets/Logo.jpg';
import './Header.css';

function Headers(){
    return(
        <>
            <center>
            <img className='logo' src={logo} alt="Logo image"></img>
            </center>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            

            <ul className="navbar">
              <li>
                <NavLink to="/">
                  <i> </i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <i></i> About
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
          </div>
          <Outlet />
        </>

    );
}

export default Headers;