import React from 'react';
import './Login.sass';
import fire from "../../config/Fire";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fireErrors: "",
            formTitle: "Login",
            loginBtn: true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    getAction = action => {
        if (action === 'register') {
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''})
        } else {
            this.setState({formTitle: 'Register New User', loginBtn: true, fireErrors: ''})
        }
    }

    render() {

        let errorNotification = this.state.fireErrors ?
            (<div className="Error">{this.state.fireErrors}</div>) : null

        let submitBtn = this.state.loginBtn
            ? (<button className='login-btn' type='submit' onClick={this.login}> Login </button>)
            : (<button className='login-btn' type='submit' onClick={this.register}> Register </button>)

        let loginRegister = this.state.fireErrors
            ? (<button className='register-btn' onClick={() => this.getAction('register')}> Register </button>)
            : (<button className='register-btn' onClick={() => this.getAction('login')}> Login </button>)

        return (
            <div className="modal">
                <div className="modalBody">
                    <form className="modalBody-form">
                        {errorNotification}
                        <p>{this.state.formTitle}</p>
                        <div className="modalBody-input">
                            <label htmlFor="email">E-mail</label>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=''
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="modalBody-input">
                            <label htmlFor="password">Password</label>
                            <div>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder=''
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="modalBody-login">
                            { submitBtn }
                        </div>
                        <div className="modalBtnClose"
                             onClick={this.props.setOpenModalLogin}>
                            <i className="fas fa-times"/>
                        </div>
                    </form>
                    { loginRegister }
                </div>
            </div>
        )
    }
}
export default Login;
