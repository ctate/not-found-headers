import { headers } from "next/headers";

export default async function NotFound() {
  const h = await headers();
  const host = h.get("x-site-host") ?? "missing";
  console.log("HOST 1", host);
  return;
}
