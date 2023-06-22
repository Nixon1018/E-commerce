import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = (props) =>{
    return(
        <header>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        Sneaker
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"/><div className='badge'>{props.len}</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>

    );
}

export default Header;
