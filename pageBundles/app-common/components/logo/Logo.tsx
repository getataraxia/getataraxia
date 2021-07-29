import React from "react";
import Link from "next/link";
import { StyledLogo } from '../header/styles';

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>✦ &nbsp;Ataraxia Labs</StyledLogo>
    </Link>
  );
};

export default Logo;
