import { Outlet, NavLink, Link } from "react-router-dom";
import logo from '../../assets/Logo.jpg'

function Headers(){
    return(
        <>
            <center>
            <img className='logo' src={logo} alt="Logo image"></img>
            </center>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"> </i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-solid fa-address-book"></i> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-solid fa-address-book"></i> Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactme">
                  <i className="fa-solid fa-address-book"></i> Contact me
                </NavLink>
              </li>

            </ul>            
          </div>
          <Outlet />
            {/* <div className='topnav'>
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> */}
        </>

    );
}

export default Headers;