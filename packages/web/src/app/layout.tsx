import * as React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Daniel Swann',
  description: 'Personal website for software developer Daniel Swann',
};

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
