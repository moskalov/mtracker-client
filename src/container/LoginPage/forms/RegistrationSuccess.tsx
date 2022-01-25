import React from "react";
import StyledButton from "../../../component/Button";
import Paragraph from "../../../component/Paragraph";
import {SignInPageFormProps} from "./index";
import styled from "styled-components";


const RegistrationSuccess: React.FC<SignInPageFormProps> = (props) => {

    return (
        <Container>
            <h1>Registration success</h1>
            <Paragraph>
                Thanks for your registration. We just send you a request to confirm your registration.
                If you did not receive it please check your spam folder.
            </Paragraph>
            <StyledButton onClick={() => props.nextForm("SignInForm")}>
                Back to sign in
            </StyledButton>
        </Container>
    )
}

export default RegistrationSuccess;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`