import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav class="navbar">
                <Link class="navbar__brand" to="/">Redux Auth</Link>

                <div>
                    <ul class="navbar__list">
                        <li class="navbar__item">
                            <Link class="navbar__link" to="/register">Sign Up</Link>
                        </li>
                        <li class="navbar__item">
                            <Link class="navbar__link" to="/login">Sign In</Link>
                        </li>
                        <li class="navbar__item">
                            <Link class="navbar__link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;