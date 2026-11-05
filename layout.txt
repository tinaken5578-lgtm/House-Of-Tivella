import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Tivella | Hair, Beauty & Confidence",
  description: "Luxury hair, beautiful transformations and thoughtful beauty services from House of Tivella.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
