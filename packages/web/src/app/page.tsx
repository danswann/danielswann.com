'use client';
import Email from '@mui/icons-material/Email'
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import Grouch from '@/../public/images/grouch.jpg';
import LinkButton from '@/components/LinkButton';
import AboutMe from '@/content/markdown/about.mdx';


const aboutMdxComponents: MDXComponents = {
  h1: ({ children }) => <Typography variant='h4' variantMapping={{ h4:'h1' }}>{children}</Typography>,
  h2: ({ children }) => <Typography variant='h5' variantMapping={{ h5:'h2' }}>{children}</Typography>,
  h3: ({ children }) => <Typography variant='h6' variantMapping={{ h6:'h3' }}>{children}</Typography>,
  p: ({ children }) => <Typography /*marginBottom='1rem'*/ variant='body1' >{children}</Typography>
}

export default function HomePage() {
  const theme = useTheme();

  return (
    <Card sx={{ padding:'1rem 2rem 0.5rem 2rem', marginBottom:'1rem' }}>
      <Box  sx={{ display:'flex', flexDirection:'row', marginBottom:'1rem', [theme.breakpoints.down('md')]:{flexDirection:'column'} }}>
        <CardMedia sx={{ flex:1, minWidth:100, minHeight:100, maxWidth:300, maxHeight:300, alignSelf:'center' }}>
          <Image priority width={300} style={{ height:'auto', width:'100%', border:'0.5rem solid DarkKhaki' }} src={Grouch} alt='Oscar the Grouch' />
        </CardMedia>
        <CardContent sx={{ flex:2, margin:'0 0.5rem', [theme.breakpoints.down('md')]:{margin:0} }}>
          <AboutMe components={aboutMdxComponents} />
        </CardContent>
      </Box>
      <Divider />
      <CardActions sx={{ display:'flex', justifyContent:'center', columnGap:'2rem', flexWrap:'wrap', [theme.breakpoints.down('md')]:{columnGap:0} }}>
        <LinkButton href='https://github.com/danswann' icon={<GitHub />} text='GitHub' />
        <LinkButton href='https://www.linkedin.com/in/daniel-swann/' icon={<LinkedIn />} text='LinkedIn' />
        <LinkButton href='mailto:hello@danielswann.com' icon={<Email />} text='Email' />
      </CardActions>
    </Card>
  );
}
