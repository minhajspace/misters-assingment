import { SIGNUP_USER } from './types'

export const signup_user = (item) => {
    return {
        type: SIGNUP_USER,
        payload: item
    };
};

