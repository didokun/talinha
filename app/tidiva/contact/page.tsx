import type { Metadata } from "next";
import { TidivaSupportPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Tidiva support | Talinha Studio",
  description: "Get help with Tidiva for iOS, including subscriptions, calendar events, reminders, and privacy requests.",
};

export default function TidivaContactPage() {
  return <TidivaSupportPage productScoped />;
}