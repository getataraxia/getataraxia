import React from 'react';
import Logo from '../logo/Logo';
import RightHeader from './RightHeader';
import { HeaderWrapper, StyledHeader } from './__styles__/Header.styles';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <StyledHeader>
          <Logo />
          <RightHeader />
        </StyledHeader>
      </HeaderWrapper>
      <NavigationDropdown />
    </>
  );
};

export default Header;
