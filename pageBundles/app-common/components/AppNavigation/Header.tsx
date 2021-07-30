import React from 'react';
import Logo from '../logo/Logo';
import RightHeader from './RightHeader';
import { HeaderWrapper, StyledHeader } from './__styles__/Header.styles';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <StyledHeader>
          <Logo />
          <RightHeader />
        </StyledHeader>
      </HeaderWrapper>
      <NavigationDropdown />
    </div>
  );
};

export default Header;
