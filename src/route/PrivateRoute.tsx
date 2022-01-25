import {useSelector} from "react-redux";
import {Navigate} from "react-router";
import {RootState} from "../redux/reducer";
import _ from "lodash";
import {SIGN_IN_PAGE} from "./UrlMap";
import React from "react";

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({component: RouteComponent}) => {
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);
    const isAuthenticated = !_.isEmpty(accessToken);

    return isAuthenticated ?
        <RouteComponent/> :
        <Navigate to={SIGN_IN_PAGE}/>
}