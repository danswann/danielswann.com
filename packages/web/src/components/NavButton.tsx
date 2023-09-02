'use client';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Link href={href} sx={{ color:'inherit' }}>
      <Button size='large' startIcon={icon}
        sx={{
          color: 'inherit',
          margin: smallScreen ? 0 : '0 1rem',
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