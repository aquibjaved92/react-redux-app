import React from 'react'
import { connect } from 'react-redux'

const Contact = (props) => {
    const userStatus = localStorage.getItem("userStatus")
    return(
        <div>
            {
                userStatus==="okay" ?
                <React.Fragment>welcome, Contact page</React.Fragment> :
                <React.Fragment>You are not logged in</React.Fragment>
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