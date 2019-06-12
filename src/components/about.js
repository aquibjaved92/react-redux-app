import React from 'react'

const About = (props) => {
    const userStatus = localStorage.getItem("userStatus")
    return(
        <div>
            {
                userStatus==="online" ?
                <React.Fragment>
                    welcome, About page
                </React.Fragment> :
                <div>
                    <div>you are not logged in</div>
                    <span onClick={() => props.history.push("/")}>go to login</span>
                </div>
            }
        </div>
    )
}

export default About