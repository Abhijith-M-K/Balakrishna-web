import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://balakrishna-web.vercel.app'),
  title: "Balakrishna Driving Institute | Premium Driving School in Kerala",
  description: "Learn driving from Kerala's most trusted institute since 1988. Professional training, certified trainers, and a premium fleet of vehicles in Pookaad, Koyilandy.",
  keywords: ["Balakrishna Driving Institute", "Driving School Pookaad", "Kozhikode Driving School", "Learn Driving Kerala", "Driving License Assistance"],
  openGraph: {
    title: "Balakrishna Driving Institute",
    description: "Driving Towards Excellence Since 1988.",
    images: ["/about-bg.png"],
  },
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
