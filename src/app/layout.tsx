import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Toaster />
        {children}
    
      </body>
    </html>
  );
}
