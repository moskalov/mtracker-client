import {AuthApiConfig} from "./ApiConfig";
import {AuthenticationReqBody} from "../model/AuthenticationReqBody";
import AuthenticationResBody from "../model/AuthenticationResBody";
import CreateAccountReqBody from "../model/CreateAccountReqBody";

const {post, get} = AuthApiConfig;

export const AuthApi = {
    fetchAccessTokenByRefreshToken: (): Promise<AuthenticationResBody> => {
        return get("/client/sign-in");
    },
    fetchAccessTokenByCredentials: (login: string, password: string): Promise<AuthenticationResBody> => {
        const credentials: AuthenticationReqBody = {email: login, password}
        return post('/client/sign-in', credentials)
    },
    registerAccount: (reqBody: CreateAccountReqBody): Promise<void> => {
        return post('/client/sign-up', reqBody);
    },
    confirmEmail: (confirmToken: string): Promise<void> => {
        return get('/client/emails/confirmation',
            {params: {token: confirmToken}}
        )
    },
    removeRefreshToken: (): Promise<void> => {
        return get('/client/sign-out')
    }
}
