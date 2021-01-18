import { SIGNUP_USER } from '../actions/types'
const initalState = {
    authData: []
}


const reducers = (state = initalState, action) => {
    console.log(state)
    switch (action.type) {
        case SIGNUP_USER:
            const item = action.payload
            return {
                authData: [...state.authData, item]
            }

        default: return state;
    }
}
export default reducers