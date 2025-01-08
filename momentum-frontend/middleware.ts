import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const cookieHeader = req.headers.get("cookie");

  const cookies = cookieHeader
    ? Object.fromEntries(cookieHeader.split("; ").map((c) => c.split("=")))
    : {};

  const token = cookies["authToken"];

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard", // Protect dashboard route
};
