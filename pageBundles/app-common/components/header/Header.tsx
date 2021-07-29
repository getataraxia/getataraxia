import React from 'react';
import Logo from '../logo/Logo';
import RightHeader from './RightHeader';
import { HeaderWrapper, StyledHeader } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Logo />
        <RightHeader />
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
