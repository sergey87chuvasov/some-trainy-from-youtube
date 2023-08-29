const cells = document.querySelectorAll('.cell');
const playerXScoreSpan = document.querySelector('#playerXScore');
const playerYScoreSpan = document.querySelector('#playerYScore');
const resetBtn = document.querySelector('#resetBtn');
const toastDiv = document.querySelector('.toast');
const draws = document.querySelector('.draws');

const playerX = 'X';
const playerY = 'O';
let playerXScore = 0;
let playerYScore = 0;
let currentLevel = 1;
let flag = true;
let currentPlayer = playerX;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 8],
];
