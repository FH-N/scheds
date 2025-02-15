import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const response = await fetch(
      "https://schedsadvising-dev.runasp.net/api/Auth/Login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const data = await response.json();
    const { accessToken, refreshToken, refreshTokenExpiry } =
      data.responseContent || {};

    if (!accessToken || !refreshToken || !refreshTokenExpiry) {
      return NextResponse.json(
        { message: "Invalid server response" },
        { status: 500 }
      );
    }

    const refreshMaxAge =
      typeof refreshTokenExpiry === "number" && refreshTokenExpiry > 0
        ? refreshTokenExpiry
        : 7 * 24 * 60 * 60;

    const cookieStore = await cookies();

    cookieStore.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 86400,
    });

    cookieStore.set({
      name: "refreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: refreshMaxAge,
    });

    return NextResponse.json({
      message: "Login successful",
      refreshMaxAge,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
