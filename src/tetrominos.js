import colors from './assets/themes/colors';

export const TETROMINOS = {
  0: { shape: [[0]], color: colors.rgb.darkBlue },
  I: {
    shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
    color: colors.rgb.green
  },
  J: { 
      shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], 
      color: colors.rgb.blue },
  L: {
    shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
    color: colors.rgb.orange
  },
  O: { 
      shape: [['O', 'O'], ['O', 'O']], 
      color: colors.rgb.yellow 
  },
  S: { 
      shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], 
      color: colors.rgb.darkGreen 
  },
  T: {
    shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
    color: colors.rgb.purple,
  },
  Z: { 
      shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], 
      color: colors.rgb.red,
  },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};