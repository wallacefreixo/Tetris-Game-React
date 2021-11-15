import styled from 'styled-components';
import colors from '../../assets/themes/colors';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  width: 100%;
  color: ${colors.normal.white};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

export const StyledTitle = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: ${props => (props.gameOver ? colors.normal.darkRed : colors.normal.blackBlue )};
  padding: 10px;
`;

export const StyledText = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: ${props => (props.gameOver ? colors.normal.red : colors.normal.darkBlue )};
  padding: 15px 10px;
`;
