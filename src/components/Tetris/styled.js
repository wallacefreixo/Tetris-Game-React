import styled from 'styled-components';
import colors from '../../assets/themes/colors';

import bgImage from '../../assets/img/bg.png'

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside{
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;

    h1{
      display: flex;
      justify-content: center;
      font-family: Pixel, Arial, Helvetica, sans-serif;
      font-size: 2.5rem;
      color: ${colors.normal.white};
    }
  }
`;
