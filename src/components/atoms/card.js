import styled from '@emotion/styled';
import Box from './Box';

const Card = styled(Box)(() => ({
  borderRadius: '4',
  border: '1px solid #f6f6f6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
}));

Card.defaultProps = {
  p: 3,
  bg: 'white',
};

export default Card;
