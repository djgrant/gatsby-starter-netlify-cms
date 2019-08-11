import styled from '@emotion/styled';
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

    .button {
      display: inline-block;
      background: white;
      border-radius: 25px;
      border: 2px solid ${get('colors.green')};
      color: ${get('colors.green')};
      padding: 12px 24px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1px;
      transition: background 0.3s;

      &:hover {
        color: white;
        background: ${get('colors.green')};
      }
    }

    hr {
      border: none;
      border-top: 2px solid ${get('colors.grey.0')};
      margin: ${get('space.4')}px 0;
    }
  `
  )
);
