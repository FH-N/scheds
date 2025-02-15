import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "No refresh token provided" },
        { status: 401 }
      );
    }

    const response = await fetch(
      "https://schedsadvising-dev.runasp.net/api/Auth/Refresh",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to refresh token" },
        { status: 401 }
      );
    }

    const data = await response.json();
    const {
      accessToken,
      refreshToken: newRefreshToken,
      refreshTokenExpiry,
    } = data.responseContent || {};

    if (!accessToken || !newRefreshToken || !refreshTokenExpiry) {
      return NextResponse.json(
        { message: "Invalid server response" },
        { status: 500 }
      );
    }

    const refreshMaxAge =
      typeof refreshTokenExpiry === "number" && refreshTokenExpiry > 0
        ? refreshTokenExpiry
        : 7 * 24 * 60 * 60;

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
      value: newRefreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: refreshMaxAge,
    });

    return NextResponse.json({
      message: "Token refreshed successfully",
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
