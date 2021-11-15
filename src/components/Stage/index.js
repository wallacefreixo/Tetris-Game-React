import React from 'react';
import { StyledStage } from './styled'

import Cell from '../Cell';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row=> row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
  </StyledStage>
)

export default Stage