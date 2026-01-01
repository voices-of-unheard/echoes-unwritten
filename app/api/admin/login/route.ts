import { NextResponse } from "next/server"
import { ADMIN_CREDENTIALS } from "@backend/adminConfig"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, password } = body

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      )
    }

    // Check credentials
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const response = NextResponse.json({ success: true })

      // Set secure admin cookie
      response.cookies.set("admin-auth", "true", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      })

      return response
    }

    // Invalid credentials
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  } catch (error) {
    console.error("Admin login error:", error)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
