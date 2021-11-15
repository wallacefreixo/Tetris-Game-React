import React from 'react';

import { StyledDisplay, StyledTitle, StyledText } from './styled';

const Display = ({ gameOver, title, text }) => (
 <StyledDisplay>
   <StyledTitle gameOver={gameOver}> { title }</StyledTitle>
   <StyledText gameOver={gameOver}> { text } </StyledText>
 </StyledDisplay>
)

export default Display