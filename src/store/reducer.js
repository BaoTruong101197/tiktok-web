import { SET_USER_SIGN_IN } from './constants'

const initValue = {
    user: {
        signIn: false,
        data: []
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER_SIGN_IN:
            return { user: { signIn: action.payload.signIn, data: action.payload.data } }
        default:
            throw new Error('Invalid Action')
    }
}

export { initValue }
export default reducer
