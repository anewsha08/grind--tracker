import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import RegisterSW from "@/components/RegisterSW";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Grind Control — DSA · Qualcomm · GRE Tracker",
  description:
    "14-week grind tracker with a focus timer and a dynamic skill roadmap generator.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Grind Control",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#14171c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
