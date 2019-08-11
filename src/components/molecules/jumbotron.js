import React from 'react';
import Box from '../atoms/box';

const Jumbotron = ({ children, image, ...props }) => (
  <Box
    {...props}
    minHeight={9}
    style={{
      backgroundImage: `url(${
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      })`,
      backgroundPosition: `bottom`,
      backgroundSize: 'cover',
      marginTop: '-1px',
    }}
  >
    <Box container gutter py={4}>
      {children}
    </Box>
  </Box>
);

export default Jumbotron;
