import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ESlint Config Hub',
  description: 'Find the best ESLint configuration for your project!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim">
      <body className={`${inter.className} min-h-screen px-4 py-6`}>
        {children}
      </body>
    </html>
  );
}
