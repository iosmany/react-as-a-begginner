
import * as actionTypes from '../actions/actionsType';

export interface AuthState {
    user: unknown,
    isLoggedIn: boolean    
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false
}

interface AuthAction {
    type: string;
    payload?: AuthState;
}

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case  actionTypes.AUTH_LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLoggedIn: true }
        case actionTypes.AUTH_LOGOUT_SUCCESS:
            return { ...state, user: null, isLoggedIn: false }
        default:
            return state
    }
}