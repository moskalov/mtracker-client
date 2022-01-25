import {useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import _ from "lodash";
import AccessTokenPayload from "../model/AccessTokenPayload";

const useIsTokenExpired = (token: string) => {
    const [timer, setTimer] = useState<any>(0);
    const [isExpired, setIsExpired] = useState<boolean>(true);

    const getTimeToTokenExpire = (token: string) => {
        const decoded: AccessTokenPayload = jwtDecode(token);
        const nowMs = Date.now();
        const tokenExpMs = decoded.exp * 1000;
        return tokenExpMs - nowMs;
    }

    useEffect(() => {
        const resetTimer = (timeOut: number) => {
            clearTimeout(timer);
            setIsExpired(false);
            const timerIndex = setTimeout(() => setIsExpired(true), timeOut);
            setTimer(timerIndex);
        }
        if (!_.isEmpty(token)) {
            const timeOut = getTimeToTokenExpire(token);
            if (timeOut > 0) resetTimer(timeOut);
        }
        return () => clearTimeout(timer);
    }, [token]);

    return [isExpired];
}

export default useIsTokenExpired;