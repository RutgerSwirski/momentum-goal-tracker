import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const token = req.cookies.get("authToken")?.value;

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

    if (!res.ok) {
      console.error("Invalid token or failed validation.");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (err) {
    console.error("Middleware fetch failed:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
