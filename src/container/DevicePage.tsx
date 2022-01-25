import React from "react";
import PageContainer from "../component/PageContainer";


interface HomePageProps {

}

const DevicePage: React.FC<HomePageProps> = (props) => {

    return (
        <PageContainer>
            <div>
                <h1>DEVICE MANAGEMENT PAGE</h1>
            </div>
        </PageContainer>
    )
}

export default DevicePage;

