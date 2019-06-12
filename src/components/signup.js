import React from 'react'

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            confirmPassword:"",
            users:[],
            msg:"",
        }
    }

    handleInput(e,value){
        this.setState({
            [value] : e.target.value
        })
    }

    signUp(){
        if(this.state.username==""||this.state.password==""||this.state.confirmPassword==""){
            this.setState({
                msg:"no fields can be left blank"
            })
        }
        else{
            if(this.state.password===this.state.confirmPassword){
                const credentials = {
                    username : this.state.username,
                    password: this.state.password
                }
                let users = localStorage.getItem('users')
                let newUser = true;
                if(users!==""){
                    users = JSON.parse(users)
                    for(let i=0;i<users.length;i++) {
                        if(credentials.username===users[i].username){
                            newUser = false
                            break;
                        }
                    }
                }
                if(newUser===true){
                    this.setState({
                        users : [...users, credentials],
                        msg:"your account has been created",
                        username:"",
                        password:"",
                        confirmPassword:""
                    },() => {
                        localStorage.setItem("users",JSON.stringify(this.state.users))
                    })
                }
                else{
                    this.setState({
                        msg:"username already registered",
                        username:"",
                        password:"",
                        confirmPassword:""
                    })
                }
            }
            else{
                alert("passwords do not match")
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <input
                    type="text"
                    placeholder="choose username"
                    value={this.state.username}
                    onChange={(e) => this.handleInput(e,"username")}
                />
                <input
                    type="password"
                    placeholder="enter password"
                    value={this.state.password}
                    onChange={(e) => this.handleInput(e,"password")}
                />
                <input
                    type="password"
                    placeholder="confirm password"
                    value={this.state.confirmPassword}
                    onChange={(e) => this.handleInput(e,"confirmPassword")}
                />
                <button onClick={this.signUp.bind(this)}>Signup</button>
                <p>{this.state.msg}</p>
                <p onClick={() => this.props.history.push("/")}>Already have an account ? go to login</p>
            </React.Fragment>
        )
    }
}

export default Signup