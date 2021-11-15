import styled from 'styled-components';
import colors from '../../assets/themes/colors';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 3px;
  color: ${colors.normal.white};
  border: none;
  background: ${colors.normal.blue};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
`;
