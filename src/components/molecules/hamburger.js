import React from 'react';
import Box from '../atoms/box';

const StylelessButton = ({ children }) => (
  <button
    role="presentation"
    style={{
      margin: 0,
      padding: 0,
      border: 0,
      background: 'none',
    }}
  >
    {children}
  </button>
);

const HamburgerLine = () => (
  <Box width="14px" height="2px" my="3px" bg="grey.2" />
);

const Hamburger = props => (
  <Box {...props}>
    <StylelessButton>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        color="grey.1"
      >
        <span style={{ textTransform: 'uppercase', fontSize: '15px' }}>
          Menu
        </span>
        <Box ml={1}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Box>
      </Box>
    </StylelessButton>
  </Box>
);

export default Hamburger;
