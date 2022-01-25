import React, {useEffect} from "react";
import Column from "../component/Container/Column";
import ColumnContainer from "../component/Container/ColumnContainer";
import PageContainer from "../component/PageContainer";
import HeaderLabel from "../component/HeaderLabel";
import Button from "../component/Button";
import Paragraph from "../component/Paragraph";
import {useNavigate, useSearchParams} from "react-router-dom";
import {SIGN_IN_PAGE} from "../route/UrlMap";
import Loading from "../component/Loading";
import styled from "styled-components";
import useRequestState from "../hoc/useRequestState";
import {AuthApi} from "../api/AuthApi";

const {confirmEmail} = AuthApi;


type EmailConfirmationPageProps = {}

const EmailConfirmationPage: React.FC<EmailConfirmationPageProps> = (props) => {

    const [makeRequest, isLoading, value, error] = useRequestState()

    const [searchParams] = useSearchParams();
    const confirmationToken = searchParams.get("token")

    let navigate = useNavigate();


    useEffect(() => {
        if (!confirmationToken) navigate(SIGN_IN_PAGE)
        else { // @ts-ignore
            makeRequest(confirmEmail(confirmationToken)).then(() => console.log("success"))
        }
    }, [confirmationToken, navigate])

    return (
        <PageContainer>
            <ColumnContainer style={{minHeight: 490}} backgroundImg={'url(/map.jpg)'}>
                <Column>
                    <Loading
                        isLoading={false}
                        label={"Account Activation"}
                    />
                    <Container>
                        <div>
                            <HeaderLabel center>
                                Email Confirmation
                            </HeaderLabel>
                            <Paragraph style={{visibility: isLoading ? 'hidden' : 'visible'}}>
                                Thank you for joining Mtracker system.
                                We&#8217;d like to confirm that your account was activated successfully.
                                To access to system click the link below.
                            </Paragraph>
                        </div>
                        <Button onClick={() => navigate(SIGN_IN_PAGE)}>
                            ENTER IN ACCOUNT
                        </Button>
                    </Container>
                </Column>
            </ColumnContainer>
        </PageContainer>
    )
}

export default EmailConfirmationPage;

const Container = styled.div`
  max-width: 430px;
  height: 100%;
  padding: 20px 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between
`