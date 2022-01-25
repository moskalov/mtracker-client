import AuthenticationResBody from "../../model/AuthenticationResBody";

export const AUTHENTICATION_BY_CREDENTIALS_PROCESS = "AUTHENTICATION_PROCESS";
export const AUTHENTICATION_BY_TOKEN_PROCESS = "AUTHENTICATION_PROCESS";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAIL = "AUTHENTICATION_FAIL";

export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAIL = "SIGN_OUT_FAIL";

interface AuthenticationFail {
    type: typeof AUTHENTICATION_FAIL,
    payload: any
}

interface AuthenticationSuccess {
    type: typeof AUTHENTICATION_SUCCESS,
    payload: AuthenticationResBody
}

interface AuthenticationByCredentialsProcess {
    type: typeof AUTHENTICATION_BY_CREDENTIALS_PROCESS,
}

interface AuthenticationByTokenProcess {
    type: typeof AUTHENTICATION_BY_TOKEN_PROCESS,
}

interface SignOutSuccess {
    type: typeof SIGN_OUT_SUCCESS,
}

interface SignOutFail {
    type: typeof SIGN_OUT_FAIL,
}

export type AuthActionTypes =
    SignOutFail |
    SignOutSuccess |
    AuthenticationFail |
    AuthenticationSuccess |
    AuthenticationByTokenProcess |
    AuthenticationByCredentialsProcess;

