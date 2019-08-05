import React, { useState } from 'react';
import Link from '../atoms/link';
import Box from '../atoms/box';
import Hamburger from '../molecules/hamburger';

const NavContainer = props => (
  <Box
    gutter
    display={['block', 'flex']}
    flexDirection="row"
    justifyContent="space-between"
    py={['24px', 4]}
    {...props}
  />
);

const NavLinks = props => (
  <Box
    as="ul"
    display={[props.active ? 'block' : 'none', 'flex']}
    alignItems="center"
    p={0}
    pt={[3, 0]}
    m={0}
    mb={[-2, 0]}
    css={{ listStyle: 'none' }}
    {...props}
  />
);

const NavLink = props => (
  <Box
    as="li"
    width={['100%', 'auto']}
    py={[2, 0]}
    pl={[0, 2, 4]}
    borderTop={['1px solid #ccc', 'none']}
  >
    <Link
      {...props}
      color="grey.1"
      fontWeight="bold"
      display="block"
      width="100%"
    />
  </Box>
);

const Logo = () => (
  <Link
    to="/"
    title="Logo"
    color="black"
    borderBottom="1px solid"
    borderColor="red"
  >
    <h1>Addis Tour Guide</h1>
  </Link>
);

const Nav = () => {
  const [isActive, setActive] = useState(false);
  return (
    <NavContainer as="nav" role="navigation" aria-label="main-navigation">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Logo />
        <Hamburger
          display={['block', 'none']}
          active={isActive}
          onClick={() => setActive(!isActive)}
        />
      </Box>
      <NavLinks active={isActive}>
        <NavLink to="/tours">Tours</NavLink>
        <NavLink to="/guides">Guides</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;
