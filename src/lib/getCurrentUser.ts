import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, verifyToken, JwtPayload } from "@/lib/auth";

export async function getCurrentUser(): Promise<JwtPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifyToken(token);
  return payload;
}
