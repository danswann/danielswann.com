'use client';
import GitHub from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';


export type ProjectCardProps = {
  title: string,
  imgSrc: StaticImageData,
  blurb: React.ReactNode
}

/*export default function ProjectCard(props: ProjectCardProps) {
  return(
    <Card sx={{ display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
      <CardActionArea sx={{ display:'flex', flexDirection:'row', justifyContent:'flex-start', cursor:'default' }}>
        <CardMedia sx={{ flex:'1' }}>
          <Image style={{ height:'auto', width:'100%' }} src={props.imgSrc} alt='Placeholder' />
        </CardMedia>
        <Box sx={{ flex:'3', alignSelf:'flex-start', display:'flex', flexDirection:'column', justifyContent:'flex-start' }}>
          <CardContent>
            {props.blurb}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}*/

export default function ProjectCard(props: ProjectCardProps) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Card>
      <Box  sx={{ display:'flex', flexDirection:smallScreen ? 'column' : 'row', justifyContent:'flex-start' }}>
        <CardMedia sx={{ flex:1, minWidth:100, minHeight:100, maxWidth:400, maxHeight:400 }}>
          <Image style={{ height:'auto', width:'100%' }} src={props.imgSrc} alt={`Image of ${props.title} project`} />
        </CardMedia>
        <CardContent sx={{ flex:3, marginRight:5 }}>
          {props.blurb}
        </CardContent>
      </Box>
      <Divider variant='middle' />
      <CardContent sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
        Hello
      </CardContent>
      <Divider variant='middle' />
      <CardActions>
        <Button startIcon={<GitHub />}>View Source</Button>
      </CardActions>

    </Card>
  )
}