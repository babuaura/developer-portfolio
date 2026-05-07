export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  budget?: string;
  source?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:8080";

export async function sendContactMessage(payload: ContactPayload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Something went wrong. Please try again later.";
    try {
      const data = (await response.json()) as { error?: string };
      if (data.error) {
        message = data.error;
      }
    } catch {
      // Keep the fallback message.
    }
    throw new Error(message);
  }

  return response.json() as Promise<{ id: string; message: string }>;
}
