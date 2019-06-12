import React from 'react'
import { connect } from 'react-redux'

const Contact = (props) => {
    const userStatus = localStorage.getItem("userStatus")
    return(
        <div>
            {
                userStatus==="online" ?
                <React.Fragment>welcome, Contact page</React.Fragment> :
                <div>
                    <div>you are not logged in</div>
                    <span onClick={() => props.history.push("/")}>go to login</span>
                </div>
            }
            <p>{props.change}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    change: state.change
})

export default connect (
    mapStateToProps
)(Contact)