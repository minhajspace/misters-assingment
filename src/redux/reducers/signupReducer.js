
import { SIGNUP_USER } from '../actions/types'
const initalState = {
    authData: [],
}

export const signupReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            const item = action.payload
            return {
                ...state,
                authData: [...state.authData, item]
            }
        default: return state;
    }
}
