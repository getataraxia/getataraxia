import React, { useState } from 'react';
import Link from 'next/link';
import { StyledRightNav } from './__styles__/RightHeader.styles';
import { navigationData } from './header-data';

const RightHeader = () => (
  <StyledRightNav>
    {navigationData.map((navigation) => (
      <Link key={navigation.menu} href={navigation.link}>
        <a>{navigation.menu}</a>
      </Link>
    ))}
  </StyledRightNav>
);

export default RightHeader;
