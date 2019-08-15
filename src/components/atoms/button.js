import styled from '@emotion/styled';
import { space } from 'styled-system';
import { css } from '../../utils/styled';

export default styled.button(
  space,
  css((props, get) => ({
    display: 'inline-block',
    background: 'white',
    borderRadius: '25px',
    border: `2px solid ${get('colors.green')}`,
    color: get('colors.green'),
    padding: '12px 24px',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '1px',
    transition: 'background 0.3s',

    ['&:hover']: {
      color: 'white',
      background: get('colors.green'),
    },
  }))
);
