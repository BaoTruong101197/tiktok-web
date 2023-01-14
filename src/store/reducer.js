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
            const userData = { "signIn": action.payload.signIn, "nickname": action.payload.data.nickname }
            localStorage.setItem('user-sign-in', JSON.stringify(userData))
            return { user: { signIn: action.payload.signIn, data: action.payload.data } }
        default:
            throw new Error('Invalid Action')
    }
}

export { initValue }
export default reducer
