import React from 'react';

const NavBar = props => {
    const {totalCounters} = props;
    return (
        <nav className="alert alert-dark m-3 col-sm-2">
            <a href="www.google.com" className="navbar-brand text-danger">
                Shop Cart <i className="fas fa-cart-plus m-2"></i>
                <span className="badge badge-bill badge-info p-2 m-4">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );  
}

export default NavBar;