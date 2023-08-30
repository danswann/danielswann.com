import ProjectCard from '@/components/ProjectCard';
import { MDXComponents } from 'mdx/types';
import projects from './projects';
import Typography from '@mui/material/Typography';


const projectMdxComponents: MDXComponents = {
  h1: ({ children }) => <Typography variant='h4' variantMapping={{ h4:'h2' }}>{children}</Typography>,
  h2: ({ children }) => <Typography variant='h5' variantMapping={{ h5:'h3' }}>{children}</Typography>,
  h3: ({ children }) => <Typography variant='h6' variantMapping={{ h6:'h4' }}>{children}</Typography>,
  p: ({ children }) => <Typography variant='body1'>{children}</Typography>
}

export default function ProjectPage() {
  return(
    <>
      {
        projects.map(p => {
          return <ProjectCard title={p.title} imgSrc={p.imgSrc} blurb={<p.mdBlurb components={projectMdxComponents} />} />
        })
      }
    </>
  )
}