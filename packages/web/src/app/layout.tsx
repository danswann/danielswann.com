import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import NavButton from '@/components/NavButton';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';


export const metadata = {
  title: 'Daniel Swann',
  description: 'Personal website for software developer Daniel Swann',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <AppBar component='nav' sx={{ paddingLeft:'calc(100vw - 100%)' }}>
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
                <Typography variant='h4'>
                  Daniel Swann
                </Typography>
                <Container maxWidth='md' disableGutters>
                  <Box sx={{ display:'flex', flexWrap:'wrap' }}>
                    <NavButton text='About' href='/' icon={<PersonIcon />} />
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <NavButton text='Projects' href='/projects' icon={<FolderIcon />} />
                  </Box>
                </Container>
              </Toolbar>
            </Container>
          </AppBar>
          <Box sx={{ paddingLeft:'calc(100vw - 100%)' }}>
            <Container component="main" maxWidth='xl' sx={{ paddingTop:'80px' }}>
              {children}
            </Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
