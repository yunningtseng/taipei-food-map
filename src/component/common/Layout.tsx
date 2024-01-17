import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box position='relative' minHeight='100vh'>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
