import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'

class Header extends React.Component{
    goTo(value){
        window.location.assign(value)
    }
    signOut(){
        localStorage.removeItem("userStatus")
        localStorage.removeItem("currentUser")
        window.location.replace("/")
    }
    render(){
        return(
            <React.Fragment>
                <span onClick={() => this.goTo("/home")}>Home</span>
                <span onClick={() => this.goTo("/about")}>About</span>
                <span onClick={() => this.goTo("/contact")}>ContactUs</span>
                <span onClick={this.signOut.bind(this)}>SignOut</span>
            </React.Fragment>
        )
    }
}

export default Header