import styled from '@emotion/styled';
import { space, layout, color, flexbox, borders } from 'styled-system';
import { css, switchProp, ifProp, inline } from '../../utils/styled';

const Box = styled.div(
  inline,
  space,
  layout,
  flexbox,
  color,
  borders,
  ifProp('container', {
    margin: 'auto',
    maxWidth: 'maxLineLength',
  }),
  switchProp('gutter', [{ px: [2, 3] }, { px: [3, 4] }, { px: [4, 5] }], 1),
  css({
    boxSizing: 'border-box',
  })
);

export default Box;
