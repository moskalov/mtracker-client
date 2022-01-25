import Loader from "react-loader-spinner";
import React from "react";


type LoadingBackdoorType = {
    isLoading: boolean
}

const LoadingBackdoor: React.FC<LoadingBackdoorType> = (props) => {
    return (
        <div style={{}}>
            <Loader
                height={50} width={50}
                visible={props.isLoading}
                color="black"
                type="Oval"
            />
        </div>
    )
}

export default LoadingBackdoor;