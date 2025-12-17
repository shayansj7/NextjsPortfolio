// app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="layout">
          <div className="content">{children}</div>
          <Sidebar />
        </main>

        <Footer />
      </body>
    </html>
  );
}
