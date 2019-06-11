import React from 'react'
import Loadable from 'react-loadable'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const LoadableLogin = Loadable({
  loader: () => import(/*webpackChunkName:"login_chunk"*/'./Login'),
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
  constructor(props){
    super(props);
    this.state = {
        username:"",
        password:"",
        userStatus:"",
        msg:""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signOut = this.signOut.bind(this)
    this.setStorage = this.setStorage.bind(this)
  }

  componentWillMount(){
    const userStatus = localStorage.getItem("userStatus")
    if(userStatus===null){
      this.setStorage()
    }
  }

  handleInput(e,field){
    this.setState({
      [field] : e.target.value
    })
  }

  signOut(){
    this.setState({
      userStatus:"",
      username:"",
      password:""
    },() => this.setStorage())
  }

  setStorage(){
    localStorage.setItem("userStatus",this.state.userStatus)
    this.setState({})
  }

  handleSubmit(){
    const username = this.state.username
    const password = this.state.password
    if(username==="aquib" && password==="1234"){
      this.setState({
        userStatus : "okay"
      },() => this.setStorage())
    }
    else if(username==="" || password===""){
      this.setState({
        msg: "username and password fields can't be left blank"
      })
    }
    else{
      this.setState({
        msg : "wrong username or password"
      })
    }
  }

  render(){
    const userStatus = localStorage.getItem("userStatus")
    const props = {
      handleInput : this.handleInput,
      handleSubmit : this.handleSubmit,
      msg : this.state.msg
    }
    return(
      <Router>
        {
          userStatus==="okay" && 
          <React.Fragment>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
            <Link to="/" onClick={this.signOut}>SignOut</Link>
          </React.Fragment>
        }

        <Route exact path="/" render = {
          (routerProps) => 
            userStatus==="okay" ?
              <LoadableHome {...routerProps} /> :
              <LoadableLogin {...routerProps} {...props} />
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
    )
  }
}

export default App