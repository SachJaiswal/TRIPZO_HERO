import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tripzo — #1 AI Travel Companion & Smart Itinerary Generator",
  description:
    "Plan less and travel more with Tripzo. Craft personalized day-by-day itineraries, flight tracking, and hotel bookings in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
