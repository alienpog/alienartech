import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile || alienartech",
  description: "Am a Full-Stack Developer and UX/UI Designer.",
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFA]">{children}</body>
    </html>
  );
}
