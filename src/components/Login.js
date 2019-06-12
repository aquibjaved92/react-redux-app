import React from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../redux/actions/actions";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            userStatus:"",
            msg:"",
            show: false,
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        const userStatus = localStorage.getItem("userStatus");
        if(userStatus==="online"){
            window.location.replace("/home")
        }
    }

    componentDidMount(){
        this.props.changeState();
        setTimeout(() => {
            this.setState({
                show: true
            })
        }, 100);
    }

    handleInput(e,field){
        this.setState({
          [field] : e.target.value
        })
    }

    handleSubmit(){
        const username = this.state.username
        const password = this.state.password
        let users = localStorage.getItem("users")
        if(users!==""){
            users = JSON.parse(users)
        }
        let oldUser = false
        for(let i=0;i<users.length;i++){
            if(username===users[i].username){
                oldUser = true
                if(password===users[i].password){
                    localStorage.setItem("userStatus","online")
                    localStorage.setItem("currentUser",username)
                    this.props.history.push("/home")
                    window.location.reload()
                    break;
                }
                else{
                    this.setState({
                        msg: "incorrect password"
                    })
                    break;
                }
            }
        }
        if(oldUser===false){
            this.setState({
                msg: "user doesn't exist"
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.state.show && 
                    <div>
                        <input 
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={(e)=>this.handleInput(e,"username")}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={(e)=>this.handleInput(e,"password")}
                        />
                        <div style={{color:"red"}}>{this.state.msg}</div>
                        <button onClick={this.handleSubmit}>submit</button>
                        <p>
                            Not a member! <span 
                            onClick={() => this.props.history.push('/signup')}>signup</span>
                        </p>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    store : state
})

const mapDispatchToProps = dispatch => ({
    changeState: () => dispatch(ACTIONS.changeState()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);