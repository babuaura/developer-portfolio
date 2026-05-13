import { NextRequest, NextResponse } from "next/server";
import { BackendRequestError, backendFetch } from "@/lib/backend-server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const result = await backendFetch(`/api/contact/messages/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
    return NextResponse.json(result);
  } catch (error) {
    const status = error instanceof BackendRequestError ? error.status : 502;
    const message =
      error instanceof Error ? error.message : "Could not reach profile backend";
    return NextResponse.json({ error: message }, { status });
  }
}
