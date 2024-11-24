
const initialState: UserState = {
    user: null,
    isLoggedIn: false
}

interface UserState {
    user: unknown,
    isLoggedIn: boolean    
}

interface UserAction {
    type: string;
    payload?: unknown;
}

export const userReducer = (state = initialState, action : UserAction) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return { ...state, user: action.payload, isLoggedIn: true }
        case 'USER_LOGOUT':
            return { ...state, user: null, isLoggedIn: false }
        default:
            return state
    }
}