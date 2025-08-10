import "./globals.css";

export const metadata = {
  title: "Building Zone — სამშენებლო ზონა",
  description: "მასალები, მიტანა, პროფესიონალი ბრიგადები.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className="min-h-screen bg-[#0f3a2f] text-white">{children}</body>
    </html>
  );
}
