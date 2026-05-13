const BACKEND_BASE_URL =
  process.env.BACKEND_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:8080";

const BACKEND_ADMIN_TOKEN = process.env.BACKEND_ADMIN_TOKEN ?? "";

export class BackendRequestError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

export async function backendFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (BACKEND_ADMIN_TOKEN) {
    headers.set("Authorization", `Bearer ${BACKEND_ADMIN_TOKEN}`);
  }

  const response = await fetch(`${BACKEND_BASE_URL}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    let message = `Backend request failed with ${response.status}`;
    try {
      const data = (await response.json()) as { error?: string };
      message = data.error ?? message;
    } catch {
      // Keep the generic backend status message.
    }
    throw new BackendRequestError(message, response.status);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}
