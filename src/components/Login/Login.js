import React from 'react';
import './Login.sass';
import fire from "../../config/Fire";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "",
            email: "",
            password: "",
            fireErrors: "",
            loginBtn: true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    // }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    render() {

        let errorNotification = this.state.fireErrors ?
            (<div className="Error">{this.state.fireErrors}</div>) : null

        return (
            <div className="modal">
                <form className="modalBody" >
                    {errorNotification}
                    <p>Login</p>
                    {/*<div className="modalBody-input">*/}
                    {/*    <label htmlFor="name">User name</label>*/}
                    {/*    <div>*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            id="name"*/}
                    {/*            placeholder=''*/}
                    {/*            onChange={this.handleChange}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                        <button type='submit' onClick={this.login}>
                            submit
                        </button>
                    </div>
                    <div className="modalBtnClose" onClick={this.props.setOpenModalLogin}>
                        <i className="fas fa-times"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
