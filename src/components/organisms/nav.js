import React, { useState } from 'react';
import { Link } from 'gatsby';
import Box from '../atoms/box';

const StyledNav = props => (
  <Box
    gutter
    display={['block', 'flex']}
    flexDirection="row"
    justifyContent="space-between"
    py={[3, 4]}
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
    <Link {...props} style={{ display: 'block', width: '100%' }} />
  </Box>
);

const Hamburger = props => (
  <Box {...props}>
    <button role="presentation">Menu</button>
    <div>
      <span />
      <span />
      <span />
    </div>
  </Box>
);

const Nav = () => {
  const [isActive, setActive] = useState(false);
  return (
    <StyledNav as="nav" role="navigation" aria-label="main-navigation">
      <Box display="flex" justifyContent="space-between">
        <Link to="/" title="Logo">
          <h3>Addis Tour Guide</h3>
        </Link>
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
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </StyledNav>
  );
};

export default Nav;
