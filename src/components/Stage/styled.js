import styled from 'styled-components';
import colors from '../../assets/themes/colors';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 15px solid ${colors.normal.blue};
  border-radius: 3px;
  width: 100%;
  max-width: 25vw;
  background: ${colors.normal.darkBlue};
`;