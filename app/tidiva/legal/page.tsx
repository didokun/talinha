import type { Metadata } from "next";
import { TidivaTermsPage } from "@/components/TidivaPages";

export const metadata: Metadata = {
  title: "Tidiva terms and purchases | Talinha Studio",
  description: "License, subscription, free-trial, and lifetime purchase information for Tidiva by Talinha Studio.",
};

export default function TidivaLegalPage() {
  return <TidivaTermsPage productScoped />;
}