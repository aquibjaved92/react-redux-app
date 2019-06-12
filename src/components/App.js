import React from 'react'
import Loadable from 'react-loadable'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const LoadableHeader = Loadable({
  loader: () => import(/*webpackChunkName:"header_chunk"*/'./header'),
  loading: () => {return(<div>Loading...</div>)}
})

const LoadableLogin = Loadable({
  loader: () => import(/*webpackChunkName:"login_chunk"*/'./Login'),
  loading: () => {return(<div>Loading...</div>)}
})

const LoadableSignup = Loadable({
  loader: () => import(/*webpackChunkName:"signup_chunk"*/'./signup'),
  loading: () => {return(<div>Loading...</div>)}
})

const LoadableHome = Loadable({
  loader: () => import(/*webpackChunkName:"home_chunk"*/'./home'),
  loading: () => {return(<div>Loading...</div>)}
})

const LoadableAbout = Loadable({
  loader: () => import(/*webpackChunkName:"about_chunk"*/'./about'),
  loading: () => {return(<div>Loading...</div>)}
})

const LoadableContact = Loadable({
  loader: () => import(/*webpackChunkName:"contact_chunk"*/'./contact'),
  loading: () => {return(<div>Loading...</div>)}
})

class App extends React.Component{

  componentWillMount(){
    const users = localStorage.getItem("users")
    if(users===null){
      localStorage.setItem("users",[])
    }
  }

  render(){
    const userStatus = localStorage.getItem("userStatus")
    return(
      <React.Fragment>
        {userStatus==="online" && <LoadableHeader/>}
        <Router> 
          
          <Route exact path="/" render = {
            (routerProps) => 
            <LoadableLogin {...routerProps} />
          }/>
        
          <Route path="/home" render = {
            (routerProps) => 
            <LoadableHome {...routerProps} />
          }/>

          <Route path="/signup" render = {
            (routerProps) => 
              <LoadableSignup {...routerProps} />
          }/>

          <Route path="/about" render = {
            (routerProps) => 
              <LoadableAbout {...routerProps} />
          }/>

          <Route path="/contact" render = {
            (routerProps) =>
              <LoadableContact {...routerProps} />
          }/>

        </Router>
      </React.Fragment>
    )
  }
}

export default App