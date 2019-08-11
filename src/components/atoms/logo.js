import React from 'react';
import Link from './link';
import styled from '@emotion/styled';

const mq0 = '@media (min-width: 20em)';
const mq1 = '@media (min-width: 40em)';

const LogoLink = styled(Link)`
  position: relative;
  font-family: 'Montserrat';
  line-height: 1;
  text-transform: uppercase;

  span span {
    display: none;
    ${mq0} {
      display: inline;
    }
  }

  ${mq1} {
    font-size: 20px;
  }

  > span:nth-of-type(1) {
    color: ${props => props.theme.colors.green};
  }
  > span:nth-of-type(2) {
    color: ${props => props.theme.colors.blue};
  }
  > span:nth-of-type(3) {
    color: ${props => props.theme.colors.red};
  }
`;

const Logo = () => (
  <LogoLink to="/" title="Logo">
    {/* <div></div> */}
    <span>
      A<span>ddis</span>
    </span>
    &nbsp;
    <span>
      T<span>our</span>
    </span>
    &nbsp;
    <span>
      G<span>uide</span>
    </span>
  </LogoLink>
);

export default Logo;
