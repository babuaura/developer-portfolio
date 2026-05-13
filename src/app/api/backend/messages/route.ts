import { NextResponse } from "next/server";
import { BackendRequestError, backendFetch } from "@/lib/backend-server";

export async function GET() {
  try {
    const messages = await backendFetch("/api/contact/messages");
    return NextResponse.json(messages);
  } catch (error) {
    const status = error instanceof BackendRequestError ? error.status : 502;
    const message =
      error instanceof Error ? error.message : "Could not reach profile backend";
    return NextResponse.json({ error: message }, { status });
  }
}
