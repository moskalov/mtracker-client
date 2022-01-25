import {
    AuthActionTypes,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL,
    AUTHENTICATION_BY_CREDENTIALS_PROCESS,
    SIGN_OUT_FAIL,
    SIGN_OUT_SUCCESS
} from "../type";
import {Dispatch} from "react";
import {RootState} from "../reducer";
import {AuthApi} from "../../api/AuthApi";
import Credentials from "../../dto/Credentials";

export const authenticateByEmailAndPassword = (credentials: Credentials) => {
    return async (dispatch: Dispatch<AuthActionTypes>, state: RootState) => {
        dispatch({type: AUTHENTICATION_BY_CREDENTIALS_PROCESS})
        AuthApi.fetchAccessTokenByCredentials(credentials.email, credentials.password)
            .then(accessToken => dispatch({type: AUTHENTICATION_SUCCESS, payload: accessToken}))
            .catch(error => {
                const message = error.status === 403 ? "Incorrect e-mail address or password" : "Server error try logging in later";
                dispatch({type: AUTHENTICATION_FAIL, payload: message})
            })
    }
}

export const authenticateByHttpOnlyRefreshToken = () => {
    return async (dispatch: Dispatch<AuthActionTypes>, state: RootState) => {
        dispatch({type: AUTHENTICATION_BY_CREDENTIALS_PROCESS})
        AuthApi.fetchAccessTokenByRefreshToken()
            .then(accessToken => dispatch({type: AUTHENTICATION_SUCCESS, payload: accessToken}))
            .catch(error => dispatch({type: AUTHENTICATION_FAIL, payload: ""}))
    }
}


export const signOut = () => {
    return async (dispatch: Dispatch<AuthActionTypes>, state: RootState) => {
        AuthApi.removeRefreshToken()
            .then(() => dispatch({type: SIGN_OUT_SUCCESS}))
            .catch(e => dispatch({type: SIGN_OUT_FAIL}))
    }
}
