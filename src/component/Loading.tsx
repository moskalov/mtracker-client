import React from "react";
import Loader from "react-loader-spinner";
import Paragraph from "./Paragraph";

type LoadingProps = {
    isLoading: boolean
    label?: string
}

const Loading: React.FC<LoadingProps> = (props) => {

    return (
        <div style={{position: "absolute"}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Loader
                    height={50} width={50}
                    visible={props.isLoading}
                    color="black"
                    type="Oval"
                />
                <Paragraph style={{display: props.isLoading ? 'revert' : 'none'}}>
                    {props.label}
                </Paragraph>
            </div>
        </div>
    )
}

export default Loading;

