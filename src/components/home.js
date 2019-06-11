import React from 'react'

const Home = (props) => {
    return(
        <div>
            <p>welcome to home page</p>
            <p onClick={() => props.history.push("/about")}>go to about</p>
        </div>
    )
}

export default Home