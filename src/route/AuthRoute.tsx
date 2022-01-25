import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducer";
import _ from "lodash";
import {Navigate} from "react-router";
import React, {useEffect} from "react";
import {HOME_PAGE} from "./UrlMap";
import {authenticateByHttpOnlyRefreshToken} from "../redux/action/AuthAction";

interface Props {
    component: React.ComponentType
    path?: string
}

export const AuthRoute: React.FC<Props> = ({component: RouteComponent}) => {
    const dispatch = useDispatch();

    const accessToken = useSelector((state: RootState) => state.auth.accessToken);
    const hasAccessToken = !_.isEmpty(accessToken);

    useEffect(() => {
        if (!hasAccessToken) {
            dispatch(authenticateByHttpOnlyRefreshToken());
        }
    }, [dispatch, hasAccessToken])

    return hasAccessToken ?
        <Navigate to={HOME_PAGE}/> :
        <RouteComponent/>

}