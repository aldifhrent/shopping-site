import { Poppins } from "next/font/google";
import ClientWrapper from "./client-wrapper";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
