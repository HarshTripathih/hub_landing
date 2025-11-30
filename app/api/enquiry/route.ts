import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // TODO: Save to database if needed

  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  );

  // Set the cookie so HeroSection can read it
  response.cookies.set("brochure_filled", "yes", {
    httpOnly: false,      // must be false so frontend can read it
    secure: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
