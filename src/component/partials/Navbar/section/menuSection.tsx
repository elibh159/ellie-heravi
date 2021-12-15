import { useState } from 'react';
import { MenuWrapper, MenuContainer, SubLink,
   Hamburger, Bar1, Bar2, Bar3, HamburgerWrapper } from '../styles/menuSectionStyles';
import { data } from '../content/data';

const renderMenu = data.menu.map((value: { title: string; link: string; }) => (
  <SubLink to={value.link} key={value.link}>
    {value.title}
  </SubLink>
));
const MenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  function setToggle() {
    setIsOpen(!isOpen);
  }
  return (<MenuContainer>
    <HamburgerWrapper>
    <Hamburger onClick={() => setToggle()}>
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </Hamburger>
    </HamburgerWrapper>
    <MenuWrapper isOpen={isOpen}>
      {renderMenu}
    </MenuWrapper>
  </MenuContainer>);
};
export default MenuSection;