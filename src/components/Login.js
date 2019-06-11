import React from 'react'
import { connect } from 'react-redux'
import ACTIONS from "../redux/actions/actions";

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.changeState();
    }
    render(){
        return(
            <div>
                <input 
                    type="text"
                    placeholder="username"
                    value={this.props.username}
                    onChange={(e)=>this.props.handleInput(e,"username")}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={this.props.password}
                    onChange={(e)=>this.props.handleInput(e,"password")}
                />
                <div style={{color:"red"}}>{this.props.msg}</div>
                <button onClick={this.props.handleSubmit}>submit</button>
            </div>
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