import { NavLink } from 'react-router-dom';
import './../App.css'
const Navbar = () => {
    return(
    <header className='fixed-top' id='navbar-header'>
    <nav id="navigation-bar" className="navbar navbar-expand-md">
      <div className="container-fluid">

        {/* logo and name */}
        <NavLink to="/home" className="navbar-brand m-0 d-flex pe-3" id='logo-section'>
          <span><i className="fa-solid fa-utensils"></i></span>
          <span className='ps-3' id='restaurant-name'>Restaurant</span>
        </NavLink>
        
        <button type="button" className="navbar-toggler p-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navigation-bar" id='menu-btn'>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* offcanvas and navbar */}
        <div className="offcanvas offcanvas-end" id="offcanvas-navigation-bar">
          <div className="offcanvas-header" id='offcanvas-navigation-header'>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body d-flex justify-content-center justify-content-md-end align-items-center" id='offcanvas-navigation-body'>
            <ul className="navbar-nav gap-3 align-items-center" id='navbar-list-section'>
              <li className="nav-item"><NavLink to="/home" className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"}>HOME</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"}>ABOUT</NavLink></li>
              <li className="nav-item"><NavLink to="/service" className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"}>SERVICE</NavLink></li>
              <li className="nav-item"><NavLink to="/menu" className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"}>MENU</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"}>CONTACT</NavLink></li>
              <li className='nav-item d-md-block mx-1' id='login'><NavLink to='login' className='nav-link btn px-3' id='login'><i className="fa-solid fa-user-tie"></i> Account</NavLink></li>
              <li className="nav-item d-md-block" id='cart'><NavLink to="cart" className="nav-link btn px-3"><i className="fa-solid fa-bag-shopping"></i> Cart</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
    )
}

export default Navbar;