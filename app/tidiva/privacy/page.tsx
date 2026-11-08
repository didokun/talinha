import type { Metadata } from "next";
import { TidivaPrivacyPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Tidiva privacy policy | Talinha Studio",
  description: "Privacy information for Tidiva, the iOS app from Talinha Studio, including local app data, calendar access, purchases, and advertising.",
};

export default function TidivaPrivacyPolicyPage() {
  return <TidivaPrivacyPage productScoped />;
}