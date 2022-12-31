import { SET_USER_SIGN_IN } from './constants'

const initValue = {
    userSignIn: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER_SIGN_IN:
            return { userSignIn: action.payload }
        default:
            throw new Error('Invalid Action')
    }
}

export { initValue }
export default reducer
