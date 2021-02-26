import React from 'react';
import './App.sass';
//import { Route } from "react-router-dom";
import Location from "./components/Location/Location";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import fire from "./config/Fire";
import HeaderActive from "./components/HeaderActive/HeaderActive";
//import Login from "./components/Login/Login";

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
                    {/*<Route exact path='/' render={() => <Header/>}/>*/}
                    {this.state.user ? <HeaderActive/> : <Header/>}
                    <Register/>
                </div>
                <Footer/>
            </>
        )
    }
}
