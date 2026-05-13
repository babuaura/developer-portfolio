import { NextRequest, NextResponse } from "next/server";
import { BackendRequestError, backendFetch } from "@/lib/backend-server";

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const profile = await backendFetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return NextResponse.json(profile);
  } catch (error) {
    const status = error instanceof BackendRequestError ? error.status : 502;
    const message =
      error instanceof Error ? error.message : "Could not reach profile backend";
    return NextResponse.json({ error: message }, { status });
  }
}
