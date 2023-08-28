'use client';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { usePathname } from 'next/navigation';
import * as React from 'react';


export type NavButtonProps = {
    text: string,
    icon: React.ReactNode,
    href: string,
}

export default function NavButton({ text, icon, href}: NavButtonProps) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link href={href} sx={{ color:'inherit' }}>
      <Button size='large' startIcon={icon}
        sx={{
          color:'inherit',
          margin:'0 20px',
          //border: isActive ? '1px solid white' : 'none'
          textDecoration: isActive ? 'underline' : 'none',
          textUnderlineOffset: '7px',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {text}
      </Button>
    </Link>
  );
}