import React from 'react';
import './Header.css';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to='/students'>Students</NavLink>
                    </li>
                    <li>
                        <NavLink to='/protocol'>Protocol</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'>Shop</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;