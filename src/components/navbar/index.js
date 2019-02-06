import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';

import CssModules from 'react-css-modules';
import styles from './navbar.css';

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();

        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul className="navbar__list">
                <button className="navbar__link" onClick={this.onLogout.bind(this)}>
                    Logout ({user.name})
                </button>
            </ul>
        )
        const guestLinks = (
            <ul styleName="navbar__list">
                <li styleName="navbar__item">
                    <Link styleName="navbar__link" to="/register">Sign Up</Link>
                </li>
                <li styleName="navbar__item">
                    <Link styleName="navbar__link" to="/login">Sign In</Link>
                </li>
                <li styleName="navbar__item">
                    <Link styleName="navbar__link" to="/">Home</Link>
                </li>
            </ul>
        )
        return(
            <nav styleName="navbar">
                <Link styleName="navbar__brand" to="/">Redux Auth</Link>

                <div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(CssModules(Navbar, styles)));