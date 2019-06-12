import React from 'react'

const Home = (props) => {
    const userStatus = localStorage.getItem("userStatus")
    const currentUser = localStorage.getItem("currentUser")
    return(
        <React.Fragment>
            {
                userStatus==="online" ? 
                <div>Welcome to home page {currentUser}</div> : 
                <div>
                    <div>you are not logged in</div>
                    <span onClick={() => props.history.push("/")}>go to login</span>
                </div>
            }
        </React.Fragment>
    )
}

export default Home