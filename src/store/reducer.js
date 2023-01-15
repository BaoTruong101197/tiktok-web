import { SET_USER_SIGN_IN } from './constants'

const initValue = {
    user: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER_SIGN_IN: {
            return { user: {} }
        }
        default:
            throw new Error('Invalid Action')
    }
}

export { initValue }
export default reducer
