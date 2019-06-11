const actionTypes = {
    change : "CHANGE"
}

const changeState = () => ({
    type : actionTypes.change,
    payload : "javed" 
})

export default {
    changeState,
    actionTypes
}