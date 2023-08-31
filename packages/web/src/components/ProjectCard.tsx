'use client';
import GitHub from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';


export type ProjectCardProps = {
  title: string,
  imgSrc: StaticImageData,
  blurb: React.ReactNode,
  tech?: React.ReactNode
  sourceUrl?: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Card sx={{ padding:'1rem 2rem 0.5rem 2rem', marginBottom:'0rem' }}>
      <Box  sx={{ display:'flex', flexDirection:smallScreen ? 'column' : 'row', justifyContent:'flex-start', marginBottom:'1rem' }}>
        <CardMedia sx={{ flex:1, minWidth:100, minHeight:100, maxWidth:400, maxHeight:400, alignSelf:'center' }}>
          <Image style={{ height:'auto', width:'100%' }} src={props.imgSrc} alt={`Image of ${props.title} project`} />
        </CardMedia>
        <CardContent sx={{ flex:3, margin:smallScreen ? 0 : '0 0.5rem' }}>
          {props.blurb}
        </CardContent>
      </Box>
      {
        props.tech ? 
          <>
            <Divider />
            <CardContent sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4rem' }}>
              {props.tech}
            </CardContent>
          </>
          : null
      }
      {
        props.sourceUrl ?
          <>
            <Divider />
            <CardActions sx={{ display:'flex', justifyContent:'flex-end' }}>
              <Link target='_blank' rel='noopener' href={props.sourceUrl}>
                <Button startIcon={<GitHub />}>View Source</Button>
              </Link>
            </CardActions>
          </>
          : null
      }
    </Card>
  )
}