import type { Metadata } from "next";
import { TidivaTermsPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Tidiva terms and purchase information | Talinha Studio",
  description: "Publisher details, app licensing, subscriptions, lifetime purchases, and privacy information for Tidiva by Talinha Studio.",
};

export default function LegalPage() {
  return <TidivaTermsPage />;
}