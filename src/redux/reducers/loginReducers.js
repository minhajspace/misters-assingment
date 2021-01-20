import { LOGIN_USER, } from '../actions/types'
const initalState = {
    isLogin: false
}

export const loginReducer = (state = initalState, action) => {

    switch (action.type) {
        case LOGIN_USER:

            return {
                ...state
            }
        default: return state;
    }

}


