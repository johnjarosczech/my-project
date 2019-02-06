import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import classnames from 'classnames';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;

        return(
            <div className = "container">
                <h2>Login</h2>

                <form className = "form-default" onSubmit = { this.handleSubmit }>
                    <div className = "form-default__group">
                        <input 
                            type = "email" 
                            placeholder = "Email" 
                            className = {classnames('form-default__input', {
                                'is-invalid': errors.name
                            })}
                            name = "email"
                            onChange = { this.handleInputChange }
                            value = { this.state.email }
                            />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className = "form-default__group">
                        <input 
                            type = "password" 
                            placeholder = "Password" 
                            className = {classnames('form-default__input', {
                                'is-invalid': errors.name
                            })}
                            name = "password"
                            onChange = { this.handleInputChange }
                            value = { this.state.password }
                            />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className = "form-default__group">
                        <button type="submit" className="button button-blue">
                            Login User
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)