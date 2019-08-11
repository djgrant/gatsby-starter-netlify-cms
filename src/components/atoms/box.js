import styled from '@emotion/styled';
import {
  space,
  layout,
  color,
  flexbox,
  borders,
  typography,
  position,
} from 'styled-system';
import { css, ifProp, inline } from '../../utils/styled';

const Box = styled.div(
  inline,
  space,
  layout,
  flexbox,
  color,
  borders,
  typography,
  position,
  ifProp('gutter', (props, themeGet) => themeGet(`gutter.${props.gutter}`)),
  ifProp('container', (props, themeGet) => ({
    maxWidth: themeGet(`containerWidths.${props.container}`),
    marginLeft: 'auto',
    marginRight: 'auto',
  })),
  css({
    boxSizing: 'border-box',
  })
);

export default Box;
