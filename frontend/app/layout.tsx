import "./globals.css";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "NPS Buddy",
  description: "Smart Retirement Planning Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-lightbg dark:bg-brand-darkbg transition-colors duration-300">
        <ThemeProvider>
          <div className="flex min-h-screen transition-colors duration-300">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 relative">
              {children}
            </div>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
