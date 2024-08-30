"use server";

import { redirect } from "next/navigation";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";

import { registerSchema, RegisterValues } from "@/lib/validations";
import {
  existingEmail,
  existingUsername,
  hashPassword,
  isWeakPassword,
} from "@/data-access/users";
import { db } from "@/lib/db";
import { generateAvatar } from "@/lib/utils";
import { lucia } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function signUp(
  values: RegisterValues,
): Promise<{ error: string }> {
  try {
    const { email, password, username } = registerSchema.parse(values);

    const weakPassword = isWeakPassword(password);

    if (weakPassword) {
      return { error: "Password is too weak" };
    }

    const hashedPassword = await hashPassword(password);

    const userId = generateIdFromEntropySize(10);

    const isUsernameExists = await existingUsername(username);

    if (isUsernameExists) {
      return {
        error: "Username already taken",
      };
    }

    const isEmailExists = await existingEmail(email);

    if (isEmailExists) {
      return {
        error: "Email already taken",
      };
    }

    await db.user.create({
      data: {
        id: userId,
        username,
        email,
        passwordHash: hashedPassword,
        avatarUrl: generateAvatar(username),
      },
    });

    const session = await lucia.createSession(userId, {});
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
