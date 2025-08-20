import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default function Test() {
  notFound();
  return <div>Multitenant</div>;
}
