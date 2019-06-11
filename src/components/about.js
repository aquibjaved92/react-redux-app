import React from 'react'

const About = (props) => {
    const userStatus = localStorage.getItem("userStatus")
    return(
        <div>
            {
                userStatus==="okay" ?
                <React.Fragment>
                    welcome, About page
                    <p onClick={() => props.history.push("/")}>go to home</p>
                </React.Fragment> :
                <React.Fragment>You are not logged in</React.Fragment>
            }
        </div>
    )
}

export default About