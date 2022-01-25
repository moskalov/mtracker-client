import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import RegistrationSuccess from "./RegistrationSuccess";
import React from "react";


export interface SignInPageFormProps {
    nextForm(formToOpen: string): void
}

export interface ISignInPageForm {
    SignInForm: React.FC<SignInPageFormProps>
    SignUpForm: React.FC<SignInPageFormProps>
    RegistrationSuccess: React.FC<SignInPageFormProps>
}

const SignInPageForm: ISignInPageForm = {SignInForm, SignUpForm, RegistrationSuccess}

export default SignInPageForm;