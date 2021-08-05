import React from "react";
import Link from "next/link";
import { setFont } from "app-common/globalStyles/variables";
import styled from "styled-components";

const StyledLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: ${setFont.main};
  font-weight: 500;
  font-size: 2.6rem;
  color: ${(p) => p.theme.colors.colorPrimary1};
  text-overflow: nowrap;
`;


const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>✦ &nbsp;Ataraxia</StyledLogo>
    </Link>
  );
};

export default Logo;
