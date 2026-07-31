import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { hashPassword, signToken, AUTH_COOKIE_NAME, authCookieOptions } from "@/lib/auth";
import { registerSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, password } = parsed.data;

    await connectToDatabase();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const hashed = await hashPassword(password);
    const user = await User.create({ name, email, password: hashed });

    const token = await signToken({
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    });

    const res = NextResponse.json(
      { user: { id: user._id, name: user.name, email: user.email } },
      { status: 201 }
    );
    res.cookies.set(AUTH_COOKIE_NAME, token, authCookieOptions);
    return res;
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
