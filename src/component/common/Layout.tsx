import { styled } from '@mui/material';
import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const StyledMain = styled('main')({
  height: '100vh',
});

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
