import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dédé Couro Diop - Ingénieur Électronique', // Update title
  description: 'CV de Dédé Couro Diop, Ingénieur en Électronique', // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply font variables and lang to <html> to avoid hydration errors
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Ensure body is the direct child with no whitespace */}
      <body className="antialiased">
        {children}
        <Toaster /> {/* Add Toaster */}
      </body>
    </html>
  );
}
