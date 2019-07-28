import React from 'react';
import Box from '../atoms/box';

const Jumbotron = ({ children }) => (
  <Box bg="tomato" minHeight={8}>
    <Box container gutter py={4}>
      {children}
    </Box>
  </Box>
);

export default Jumbotron;
