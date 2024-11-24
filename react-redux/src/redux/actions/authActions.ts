
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from './actionsType';
import { Dispatch } from '@reduxjs/toolkit';
import { loginRequest } from '../../api/AuthApi'
import { LoggedInUser } from '../../models/User';

const authLoginSuccess = (payload: LoggedInUser) => {
    return { type: AUTH_LOGIN_SUCCESS, payload }
}

const authLoginAction = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await loginRequest(email, password);  
            const loggedInUser: LoggedInUser = response.data;
            dispatch({ type: AUTH_LOGIN_SUCCESS, payload: loggedInUser });
        } catch (error) {
            const errorMessage = JSON.stringify(error);                        
            dispatch({ type: AUTH_LOGOUT_SUCCESS, payload: errorMessage });
        }
    }
}

export { authLoginSuccess, authLoginAction }