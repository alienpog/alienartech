import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abbey (AlienarTech) | Full-Stack Developer & Technical SEO Specialist",
  description:
    "Abbey (AlienarTech) is a Full-Stack Developer, UX/UI Designer, and Technical SEO Specialist focused on building modern web, mobile, and SaaS applications with Next.js, Django, and scalable architectures.",
  keywords: [
    "Full-Stack Developer",
    "Technical SEO Specialist",
    "Next.js Developer",
    "Django Developer",
    "UX/UI Designer",
    "React Native Developer",
    "SaaS Developer",
    "Web Developer",
    "Mobile App Developer",
    "Web3 Developer"
  ],
  authors: [{ name: "Abbey (AlienarTech)" }],
  creator: "Abbey (AlienarTech)",
  publisher: "AlienarTech",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFA]">{children}</body>
    </html>
  );
}
