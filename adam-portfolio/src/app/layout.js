import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adam Gilbert | AI & Software Developer",
  description:
    "Selected work in applied AI, computer vision, sports analytics, and software development by Adam Gilbert.",
  applicationName: "Adam Gilbert Portfolio",
  authors: [{ name: "Adam Gilbert" }],
  openGraph: {
    title: "Adam Gilbert | AI & Software Developer",
    description:
      "Selected work in applied AI, computer vision, sports analytics, and software development.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Adam Gilbert | AI & Software Developer",
    description:
      "Selected work in applied AI, computer vision, sports analytics, and software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
