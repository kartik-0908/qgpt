import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className='home_div'>
                <div className='home_div--text'>
                    <NavLink to="/" >Home</NavLink>
                </div>
            </div>
            <div className='navbar_model_div'>
                <div className='navbar_model_div--text'>
                <NavLink to="/model1" activeClassName="active_navbar_item">model 1</NavLink>
                </div>
            </div>
            <div className='navbar_model_div'>
                <div className='navbar_model_div--text'>
                <NavLink to="/model2" activeClassName="active_navbar_item">model 2</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
