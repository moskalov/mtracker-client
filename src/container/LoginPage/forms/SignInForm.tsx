import React from "react";
import styled from "styled-components";
import {useFormik} from "formik";
import Credentials from "../../../dto/Credentials";
import {useDispatch, useSelector} from "react-redux";
import {authenticateByEmailAndPassword} from "../../../redux/action/AuthAction";
import {RootState} from "../../../redux/reducer";
import {SignInPageFormProps} from "./index";
import HeaderLabel from "../../../component/HeaderLabel";
import Loading from "../../../component/Loading";


const SignInForm: React.FC<SignInPageFormProps> = (props: SignInPageFormProps) => {
    const dispatch = useDispatch();

    const {isAuthenticating, errorMessage} = useSelector((state: RootState) => state.auth)
    const onSubmit = (c: Credentials): any => dispatch(authenticateByEmailAndPassword(c));

    const formik = useFormik({
        initialValues: {email: "", password: ""},
        validateOnChange: false,
        onSubmit,
    });

    return (
        <>
            <HeaderLabel>
                Welcome
            </HeaderLabel>
            <Loading isLoading={isAuthenticating}/>
            <form onSubmit={formik.handleSubmit} style={{visibility: isAuthenticating ? "hidden" : "visible"}}>
                <label htmlFor="email">
                    <b>User Email</b>
                </label>
                <Field placeholder="Enter Email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       type="text"
                       name="email"
                       required
                />
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <Field placeholder="Enter Password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       type="password"
                       name="password"
                       required
                />
                {errorMessage && (<ErrorBox>{errorMessage}</ErrorBox>)}
                <Button type="submit">
                    SIGN IN
                </Button>
            </form>
            <TextButton onClick={() => props.nextForm("SignUpForm")}>
                Create Account
            </TextButton>
        </>
    )
}

export default SignInForm;

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

const Field = styled("input")`
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0 12px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
`

const ErrorBox = styled.div`
  padding-bottom: 5px;
  color: red;
  font-weight: bold
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

