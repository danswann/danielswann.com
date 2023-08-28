import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehavior(props: LinkProps, ref) {
    const {href, ...other} = props;
    return <Link href={href} ref={ref} {...other} />
  }
);

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  },
});

export default theme;
