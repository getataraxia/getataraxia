import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, StyledNavigationDropdown } from './__styles__/NavigationDropdown.styles';
import { navigationData } from './navigation-data';

const NavigationDropdown = () => {
  const [toggler, setToggler] = useState(false);

  const handleClickMenu = () => {
    setToggler((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickMenu);
    };
  }, []);

  return (
    <>
      <Menu toggler={toggler}>
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
