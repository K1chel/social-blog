import { Metadata } from "next";

import {
  AuthFooter,
  AuthHeader,
  AuthWrapper,
  SignInForm,
} from "../_components";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignUpPage = () => {
  return (
    <AuthWrapper>
      <AuthHeader title="Welcome back!" description="Sign in to continue" />
      <SignInForm />
      <AuthFooter
        title="Don't have an account?"
        hrefText="Sign up"
        href="/auth/sign-up"
      />
    </AuthWrapper>
  );
};

export default SignUpPage;
