import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, StyledRightNav } from './styles';

const RightHeader = () => {
  const [toggler, setToggler] = useState(false);

  const handleClickMenu = () => {
    setToggler((prev) => !prev);
  };

  return (
    <>
      <Menu onClick={handleClickMenu} toggler={toggler}>
        <span className="material-icons">menu</span>
      </Menu>
      <StyledRightNav>
        <li>
          <Link href="/mission">
            <a>Mission</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
        </li>
      </StyledRightNav>
    </>
  );
};

export default RightHeader;
