import styled from '@emotion/styled';
import { typography, color, border, layout, space } from 'styled-system';
import GatsbyLink from 'gatsby-link';

const Link = styled(GatsbyLink)(typography, color, border, layout, space);

export default Link;
