import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, StyledNavigationDropdown } from './__styles__/HeaderDropdown.styles';
import { navigationData } from './header-data';

const NavigationDropdown = () => {
  const menuRef = useRef(null);
  const [toggler, setToggler] = useState(false);

  const handleClickMenu = (e: Event) => {
    if ((menuRef?.current as any)?.contains(e.target)) {
      setToggler((prev) => !prev);
    } else {
      setToggler((prev) => prev ? false : false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickMenu);
    };
  }, []);

  return (
    <>
      <Menu ref={menuRef} toggler={toggler}>
        <span className="material-icons">menu</span>
      </Menu>
      <StyledNavigationDropdown toggler={toggler}>
        {navigationData.map((navigation) => (
          <Link key={navigation.menu} href={navigation.link}>
            <a>{navigation.menu}</a>
          </Link>
        ))}
      </StyledNavigationDropdown>
    </>
  );
};

export default NavigationDropdown;
