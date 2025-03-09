import { apiCall } from "./apiServices";
import urls from "../constants/urlConstants";

export async function loginUser(role: "doctor" | "patient", credentials: { email: string; password: string }) {
  const endpoint = role === "doctor" ? urls.doctorLogin : urls.patientLogin;
  return await apiCall(endpoint, "POST", credentials);
}
