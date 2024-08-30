"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { signUp } from "@/actions/auth/sign-up";
import { FormError } from "@/components/form-error";
import { SubmitButton } from "@/components/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, RegisterValues } from "@/lib/validations";
import { ShowPassword } from "@/app/auth/_components";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterValues) => {
    setError(undefined);
    startTransition(async () => {
      const { error } = await signUp(values);
      if (error) setError(error);
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {error && <FormError error={error} />}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="john_doe" disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder="example@email.com"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="pr-10"
                    disabled={isPending}
                  />
                  <ShowPassword
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                    disabled={isPending}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          text="Create Account"
          loadingText="Creating account..."
          loading={isPending}
        />
      </form>
    </Form>
  );
};
