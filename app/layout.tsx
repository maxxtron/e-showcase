import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.css'
import './globalStyles/globals.css';


export const metadata: Metadata = {
  title: "Інтернет магазин E-Showcase",
  description: "Інтернет магазин E-Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
