import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}
