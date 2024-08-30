import { Metadata } from "next";

import {
  AuthHeader,
  AuthFooter,
  AuthWrapper,
  SignUpForm,
} from "../_components";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <AuthWrapper>
      <AuthHeader
        title="Create an account"
        description="Sign up to get started with our services."
      />
      <SignUpForm />
      <AuthFooter
        title="Already have an account?"
        hrefText="Sign in"
        href="/auth/sign-in"
      />
    </AuthWrapper>
  );
};

export default SignUpPage;
