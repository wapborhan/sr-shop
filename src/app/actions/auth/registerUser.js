"use server";

import dbConnect from "@/lib/dbConnect";
import User from "@/models/Users";

export const registerUser = async (payload) => {
  try {
    await dbConnect();

    const existingUser = await User.findOne({ email: payload.email });
    if (existingUser) {
      return { error: "This Email Already Registered." };
    }

    await User.create(payload);

    return { success: true };
  } catch (error) {
    console.error("Register Error:", error);
    // return { error: "Something went wrong." };
    return error;
  }
};
