import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import * as React from 'react';


export type LinkButtonProps = {
  href: string,
  text: string,
  icon?: React.ReactNode,
}

export default function LinkButton(props: LinkButtonProps) {
  const isExternal = !props.href.startsWith('/');
  const linkProps = {
    href: props.href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noreferrer' : undefined
  }
  return (
    <Link {...linkProps}>
      <Button startIcon={props.icon}>
        {props.text}
      </Button>
    </Link>
  )
}