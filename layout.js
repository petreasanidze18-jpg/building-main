export const metadata = {
  title: "Building Zone — სამშენებლო ზონა",
  description: "მასალები, მიტანა, პროფესიონალი ბრიგადები — სრული სამშენებლო ეკოსისტემა.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
