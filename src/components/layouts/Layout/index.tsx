import { PropsWithChildren } from 'react';
import { StyledLayout } from './style';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
