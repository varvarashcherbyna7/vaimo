import React from 'react';
import './Register.sass';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='header-register-form'>
                <p>
                    New arrivals. Exclusive previews.
                    First access to sales.
                    Sign up to stay in the know.
                </p>
                <form action='#' onSubmit={this.onSubmit}>
                    <div className="register-input">
                        <input type="email"
                               name="email"
                               placeholder='Your email address'
                               // value={identifier}
                               // error={errors.identifier}
                               // onChange={this.onChange}
                        />
                    </div>
                    <div className="register-btn">
                        <button type="submit">register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
