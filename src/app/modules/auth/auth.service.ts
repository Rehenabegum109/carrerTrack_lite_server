import bcrypt from "bcrypt";

import { ILoginUser, IRegisterUser } from "./auth.interface";
import { prisma } from "../../../lib/prisma";
import { generateToken } from "../../utiles/jwt";

export const registerUser = async (payload: IRegisterUser) => {
  const { name, email, password } = payload;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });


  const accessToken = generateToken({
    id: user.id,
    email: user.email,
  });


  return {
    accessToken,

    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};




export const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new Error("Invalid password");
  }

  const accessToken = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    accessToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};
export const getMe = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};