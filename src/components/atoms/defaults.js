import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { raw } from '../../utils/styled';

const mq1 = '@media (min-width: 40em)';

export default styled.div(
  raw(
    (props, get) => `
    h1 {
      font-size: ${get('fontSizes.5')}px;
      ${mq1} {
        font-size: ${get('fontSizes.6')}px;
      }
    }
    h2 {
      font-size: ${get('fontSizes.4')}px;
      ${mq1} {
        font-size: ${get('fontSizes.5')}px;
      }
    }
    h3 {
      font-size: ${get('fontSizes.3')}px;
      ${mq1} {
        font-size: ${get('fontSizes.4')}px;
      }
    }
    h4 {
      font-size: ${get('fontSizes.2')}px;
      ${mq1} {
        font-size: ${get('fontSizes.3')}px;
      }
    }
  `
  )
);
