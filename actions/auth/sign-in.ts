"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { loginSchema, LoginValues } from "@/lib/validations";
import { comparePassword, existingUser } from "@/data-access/users";
import { lucia } from "@/auth";

export async function signIn(values: LoginValues): Promise<{ error: string }> {
  try {
    const { password, username } = loginSchema.parse(values);

    const user = await existingUser(username);

    if (!user || !user.passwordHash) {
      return { error: "Invalid username or password" };
    }

    const validPassword = await comparePassword(password, user.passwordHash);

    if (!validPassword) {
      return { error: "Invalid username or password" };
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
