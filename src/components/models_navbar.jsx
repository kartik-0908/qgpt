import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className='home_div'>
                <NavLink to="/" activeClassName="active_navbar_item">Home</NavLink>
            </div>
            <div className='navbar_model_div'>
                <NavLink to="/model1" activeClassName="active_navbar_item">model 1</NavLink>
            </div>
            <div className='navbar_model_div'>
                <NavLink to="/model2" activeClassName="active_navbar_item">odel 2</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
