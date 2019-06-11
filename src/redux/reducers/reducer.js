import ACTIONS from '../actions/actions'

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.actionTypes.change: {
            const newState = {...state}
            newState.change = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}

export default reducer