import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiCall(
  endpoint: string,
  method: string,
  body?: Record<string, unknown>,
  authToken?: string
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const options: RequestInit = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (typeof window !== "undefined") {
        toast.error(error.message); // Ensure toast is used only on the client side
      }
    } else {
      console.error("An unexpected error occurred", error);
    }
    throw error;
  }
}
