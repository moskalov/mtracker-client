import React from "react";

function useRequestState() {
    const [state, setState] = React.useState({
        value: null,
        error: "",
        isLoading: false
    });

    const makeRequest = (request: Promise<any>): Promise<any> => {
        return new Promise(function (resolve, reject) {
            setState({...state, isLoading: true})
            request.then(r => {
                setState({...state, value: r, isLoading: false, error: ""})
                resolve(r);
            }).catch(e => {
                setState({...state, error: e.message, isLoading: false})
            })
        });
    }

    const {value, error, isLoading} = state;
    return [makeRequest, isLoading, value, error];
}

export default useRequestState;