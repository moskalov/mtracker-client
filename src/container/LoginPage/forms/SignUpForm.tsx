import React from "react";
import styled from "styled-components";
import {useFormik} from "formik";
import {SignInPageFormProps} from "./index";
import HeaderLabel from "../../../component/HeaderLabel";
import Field from "../../../component/Field";
import CreateAccountReqBody from "../../../model/CreateAccountReqBody";
import {AuthApi} from "../../../api/AuthApi";
import useRequestState from "../../../hoc/useRequestState";
import Loading from "../../../component/Loading";

const {registerAccount} = AuthApi;

const SignUpForm: React.FC<SignInPageFormProps> = (props: SignInPageFormProps) => {
    const [makeRequest, isLoading, value, error]: any = useRequestState()

    const onSubmit = (account: CreateAccountReqBody) => {
        makeRequest(registerAccount(account))
            .then(() => props.nextForm("RegistrationSuccess"))
    }

    const initFormValues = {
        emailConfirmUrl: "http://localhost:3000/email/confirmation",
        firstName: "",
        lastName: "",
        password: "",
        email: "",
    };

    const formik = useFormik({
        initialValues: initFormValues,
        validateOnChange: false,
        onSubmit,
    });

    return (
        <>
            <Loading isLoading={isLoading}/>
            <HeaderLabel>
                Create Account
            </HeaderLabel>
            <form onSubmit={formik.handleSubmit}>
                <div style={{display: "flex"}}>
                    <Field label="First name"
                           disabled={isLoading}
                           placeholder="First name"
                           value={formik.values.firstName}
                           onChange={formik.handleChange}
                           name="firstName"
                           type="text"
                           required
                    />
                    <div style={{width: 25}}/>
                    <Field label="Last name"
                           disabled={isLoading}
                           placeholder="Last name"
                           value={formik.values.lastName}
                           onChange={formik.handleChange}
                           name="lastName"
                           type="text"
                           required
                    />
                </div>
                <Field label="Email Address"
                       disabled={isLoading}
                       placeholder="Enter Email"
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       type="text"
                       name="email"
                       required
                />
                <Field label="Create Strong Password"
                       disabled={isLoading}
                       placeholder="Password"
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       type="password"
                       name="password"
                       required
                />
                <ErrorBox>
                    {error}
                </ErrorBox>
                <Button disabled={isLoading} type="submit">
                    SIGN UP
                </Button>
            </form>
            <TextButton onClick={() => props.nextForm("SignInForm")}>
                Already have account?
            </TextButton>
        </>
    )
}

export default SignUpForm;

const Button = styled("button") <{ color?: string }>`
  background-color: ${props => props.color || "#15b7b6"};
  color: white;
  padding: 12px 18px;
  margin: 18px 0;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
`

const TextButton = styled.div`
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: #1f7c98;
  font-weight: bold;
`

const ErrorBox = styled.div`
  padding-bottom: 5px;
  color: red;
  font-weight: bold
`


