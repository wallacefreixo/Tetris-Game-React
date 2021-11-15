import React, { useState } from 'react';
import { createStage, checkCollision } from '../../gameHelpers';
//Styled
import { StyledTetrisWrapper, StyledTetris } from './styled';
//Hooks
import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useInterval } from '../../hooks/useInterval';
import { useGameStatus } from '../../hooks/useGameStatus';
//Components
import Stage from '../Stage';
import Display from '../Display';
import StartButton from '../StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    //aumentar o nível quando o jogador limpar 10 linhas
    if(rows > (level + 1) * 10){
      setLevel(prev => prev + 1);
      setDropTime(newTime())//Também aumentar velocidade
    }

    if(!checkCollision(player, stage, { x: 0, y: 1})){
      updatePlayerPos({ x: 0, y: 1, collided: false });
    }
    else {
      //Fim de jogo
      if(player.pos.y < 1){
        setGameOver(true);
        setDropTime(null);
      }
      
      updatePlayerPos({ x: 0, y: 0, collided: true});
    }
  }

  const keyUp = ({ keyCode }) => {
    if(!gameOver && keyCode === 40) {
      setDropTime(newTime());
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  }

  const move = ({ keyCode }) => {
    if(!gameOver){
      switch (keyCode) {
        case 37: {
          movePlayer(-1);
          break;
        };
        case 39: {
          movePlayer(1);
          break;
        };
        case 40: {
          dropPlayer();
          break;
        };
        case 38: {
          playerRotate(stage, 1); 
          break;
        };
        default:
          break;
      }
    }
  }

  useInterval(() => {
    drop();
  }, dropTime)

  const newTime = () => {
    return 1000 / (level + 1) + 200;
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={move} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage}/>
          <aside>
            <h1>TETRIS</h1>
            <StartButton callBack={startGame} />
            { gameOver 
              ? ( <Display gameOver={gameOver} text="Fim de Jogo" /> ) 
              : (
                  <div>
                    <Display title="Pontos" text={score} />
                    <Display title="Linhas" text={rows} />
                    <Display title="Nivel" text={level} />
                  </div>
                )
            }
          </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;