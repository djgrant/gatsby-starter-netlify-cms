import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { raw } from '../../utils/styled';

const mq1 = '@media (min-width: 40em)';

const defaultStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -1px;
  }
`;

export default styled.article(
  defaultStyles,
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

    h1 + .html-content,
    h2 + .html-content {
      margin-top: 20px;
      ${mq1} {
        margin-top: 24px;
      }
    }

    h1 + p,
    h2 + p,
    h3 + p,
    h4 + p,
    p + p {
      margin-top: 20px;
      ${mq1} {
        margin-top: 24px;
      }
    }

    p + h3 {
      margin-top: 40px;
      ${mq1} {
        margin-top: 48px;
      }
    }
  `
  )
);
