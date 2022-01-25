import {
    AuthActionTypes,
    AUTHENTICATION_FAIL,
    AUTHENTICATION_BY_CREDENTIALS_PROCESS,
    AUTHENTICATION_SUCCESS,
    SIGN_OUT_SUCCESS,
} from "../type/";

export interface AuthReducer {
    isAuthenticating: boolean,
    accessToken: string,
    errorMessage: string,
}

const initialState: AuthReducer = {
    isAuthenticating: false,
    accessToken: "",
    errorMessage: "",
};

export const authReducer = (state: AuthReducer = initialState, action: AuthActionTypes): AuthReducer => {

    switch (action.type) {
        case AUTHENTICATION_BY_CREDENTIALS_PROCESS: {
            return {
                isAuthenticating: true,
                accessToken: "",
                errorMessage: "",
            }
        }
        case AUTHENTICATION_SUCCESS: {
            return {
                ...state,
                isAuthenticating: false,
                accessToken: action.payload.access
            };
        }
        case AUTHENTICATION_FAIL: {
            return {
                ...state,
                isAuthenticating: false,
                errorMessage: action.payload
            };
        }
        case SIGN_OUT_SUCCESS: {
            return {
                isAuthenticating: false,
                accessToken: "",
                errorMessage: "",
            }
        }
        default:
            return state;
    }
};
