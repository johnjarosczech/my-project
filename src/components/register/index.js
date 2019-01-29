import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
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
                            type = "text" 
                            placeholder = "Name" 
                            className = "form-default__input" 
                            name = "name"
                            onChange = { this.handleInputChange }
                            value = { this.state.name }
                            />
                    </div>
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
                        <input 
                            type = "password" 
                            placeholder = "Confirm Password" 
                            className = "form-default__input" 
                            name = "password_confirm"
                            onChange = { this.handleInputChange }
                            value = { this.state.password_confirm }
                            />
                    </div>
                    <div className = "form-default__group">
                        <button type="submit" className="button button-blue">
                            Register User
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;