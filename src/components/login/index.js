import React, { Component } from 'react';

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

        console.log(user);
    }

    render() {
        return(
            <div className = "container">
                <h2>Registration</h2>

                <form className = "form-default" onSubmit = { this.handleSubmit }>
                    <div className = "form-default__group">
                        <input 
                            type = "email" 
                            placeholder = "Email" 
                            className = "form-default__input" 
                            name = "email"
                            onChange = { this.handleInputChange }
                            value = { this.state.email }
                            />
                    </div>
                    <div className = "form-default__group">
                        <input 
                            type = "password" 
                            placeholder = "Password" 
                            className = "form-default__input" 
                            name = "password"
                            onChange = { this.handleInputChange }
                            value = { this.state.password }
                            />
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

export default Login;