import { SET_USER_SIGN_IN } from './constants'

const setUserSignIn = payload => {
    return {
        type: SET_USER_SIGN_IN,
        payload
    }
}

export { setUserSignIn }
