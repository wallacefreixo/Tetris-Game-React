import React from 'react';
import { StyledStartButton } from './styled';

const StartButton = ({ callBack }) => (
    <StyledStartButton onClick={callBack}>
        Iniciar Jogo
    </StyledStartButton>
)

export default StartButton