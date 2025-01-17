import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const token = req.cookies.get("authToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  console.log(
    "Middleware token:",
    token,
    "refreshToken:",
    refreshToken,
    "cookies:",
    req
  );

  if (!token) {
    console.log("No token found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_DOCKER_API_URL;
    if (!apiUrl) throw new Error("MOMENTUM_API_URL is not defined");

    const res = await fetch(`${apiUrl}/auth/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return NextResponse.next();
    }

    if (!refreshToken) {
      console.log("No refresh token found, redirecting to login.");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const refreshRes = await fetch(`${apiUrl}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ refreshToken }),
    });

    if (!refreshRes.ok) {
      console.error("Failed to refresh token.");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const data = await refreshRes.json();
    const newToken = data.token;

    const response = NextResponse.next();
    response.cookies.set("authToken", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    return response;
  } catch (err) {
    console.error("Middleware fetch failed:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/goals/:path*", "/tasks/:path*"],
};
