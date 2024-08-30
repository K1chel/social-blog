import { db } from "@/lib/db";
import { compare, hash } from "bcryptjs";
import weakPassword from "zxcvbn";

export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, 12);
};

export const existingUsername = async (username: string) => {
  const user = await db.user.findFirst({
    where: {
      username: {
        equals: username,
        mode: "insensitive",
      },
    },
  });

  return user;
};

export const isWeakPassword = (password: string) => {
  const { score } = weakPassword(password);

  if (score >= 2) {
    return false;
  }

  return true;
};

export const existingEmail = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email: {
        equals: email,
        mode: "insensitive",
      },
    },
  });

  return user;
};

export const existingUser = async (username: string) => {
  const user = await db.user.findFirst({
    where: {
      username: {
        equals: username,
        mode: "insensitive",
      },
    },
  });

  return user;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await compare(password, hashedPassword);
};
