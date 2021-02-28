import React from 'react';
import './App.sass';
import Location from "./components/Location/Location";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import fire from "./config/Fire";
import HeaderActive from "./components/HeaderActive/HeaderActive";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });
    }


    render() {
        return (
            <>
                <div className='header'>
                    <Location/>
                    {this.state.user ? <HeaderActive/> : <Header/>}
                    <Register/>
                </div>
                <Footer/>
            </>
        )
    }
}
