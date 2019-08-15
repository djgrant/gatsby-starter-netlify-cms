import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { system } from '../../utils/styled';
import Box from '../atoms/box';
import Link from '../atoms/link';
import Logo from '../atoms/logo';
import Hamburger from '../molecules/hamburger';

const NavContainer = props => (
  <Box
    container
    display={['block', 'flex']}
    flexDirection="row"
    justifyContent="space-between"
    py={['20px', 4]}
    mt="2px"
    {...props}
  />
);

const NavLinks = props => (
  <Box
    as="ul"
    display={[props.active ? 'block' : 'none', 'flex']}
    position={['absolute', 'static']}
    alignItems="center"
    bg="white"
    width={['100%', 'auto']}
    left={0}
    px={[3, 0]}
    pt={['20px', 0]}
    pb={[2, 0]}
    m={0}
    css={{
      listStyle: 'none',
      // boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
    }}
    {...props}
  />
);
// const NavLinks = styled.ul(
//   system({
//     position: 'absolute',
//     background: 'white',
//     width: '100%',
//     left: '0',
//     listStyle: 'none',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.125)',
//     margin: '0',
//     display: props => [props.active ? 'block' : 'none', 'flex'],
//     pt: ['20px', 0],
//     pb: [2, 0],
//   })
// );

const NavLink = props => (
  <Box
    as="li"
    width={['100%', 'auto']}
    py={[2, 0]}
    pl={[0, 2, 4]}
    borderTop={['1px solid', 'none']}
    borderColor="grey.0"
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

const Nav = props => {
  const [isActive, setActive] = useState(false);
  return (
    <NavContainer
      as="nav"
      role="navigation"
      aria-label="main-navigation"
      {...props}
    >
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
