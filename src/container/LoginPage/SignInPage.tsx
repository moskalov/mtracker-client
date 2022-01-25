import React, {useState} from "react";
import SignInPageForms, {ISignInPageForm} from './forms';
import PageContainer from "../../component/PageContainer";
import ColumnContainer from "../../component/Container/ColumnContainer";
import Column from "../../component/Container/Column";

interface SignInPageProps {

}

const SignInPage: React.FC<SignInPageProps> = (props) => {
    const [currentForm, setCurrentForm] = useState<keyof ISignInPageForm>("SignInForm")

    const OpenedForm = SignInPageForms[currentForm];
    const handelFormToOpen = (formToPen: keyof ISignInPageForm) => setCurrentForm(formToPen);

    return (
        <PageContainer>
            <ColumnContainer backgroundImg={"url('/map.jpg')"}>
                <Column>
                    <img src={"/new-logo.png"}
                         height="55"
                         alt={"logo"}
                    />
                </Column>
                <Column>
                    <OpenedForm nextForm={handelFormToOpen}/>
                </Column>
            </ColumnContainer>
        </PageContainer>
    )
}

export default SignInPage;



