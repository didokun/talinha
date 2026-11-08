import type { Metadata } from "next";
import { TidivaSupportPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Contact and support | Talinha Studio",
  description: "Contact Talinha Studio for help with Tidiva, our iOS app, including subscriptions, reminders, calendar events, and privacy requests.",
};

export default function ContactPage() {
  return <TidivaSupportPage />;
}