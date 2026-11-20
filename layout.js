import "./globals.css";

export const metadata = {
  title: "Smart Startups | AI Founder Productivity Suite",
  description:
    "AI agents for customer service, talent acquisition, and user interviews built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
