import type { Metadata } from "next";
import { TidivaPrivacyPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Privacy policy | Talinha Studio",
  description: "Learn how Talinha Studio and Tidiva, our iOS app, handle app, calendar, purchase, advertising, website, and support data.",
};

export default function PrivacyPage() {
  return <TidivaPrivacyPage />;
}