<!DOCTYPE html>
<html>
<head>
    <title>Tic-Tac-Toe</title>
    <style>
        .cell {
            width: 100px;
            height: 100px;
            display: inline-block;
            border: 1px solid black;
            text-align: center;
            line-height: 100px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div id="board">
        <div class="cell" id="cell-0" onclick="cellClicked(0)"></div>
        <div class="cell" id="cell-1" onclick="cellClicked(1)"></div>
        <div class="cell" id="cell-2" onclick="cellClicked(2)"></div>
        <div class="cell" id="cell-3" onclick="cellClicked(3)"></div>
        <div class="cell" id="cell-4" onclick="cellClicked(4)"></div>
        <div class="cell" id="cell-5" onclick="cellClicked(5)"></div>
        <div class="cell" id="cell-6" onclick="cellClicked(6)"></div>
        <div class="cell" id="cell-7" onclick="cellClicked(7)"></div>
        <div class="cell" id="cell-8" onclick="cellClicked(8)"></div>
    </div>
    <div id="result"></div>
    <button onclick="resetGame()">Reset</button>

    <script>
        var currentPlayer = 'X';
        var gameStatus = ['', '', '', '', '', '', '', '', ''];
        var winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        function cellClicked(index) {
            if (gameStatus[index] === '' && !isGameOver()) {
                gameStatus[index] = currentPlayer;
                updateUI(index);
                if (isGameOver()) {
                    document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
                } else if (!gameStatus.includes('')) {
                    document.getElementById('result').innerText = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function updateUI(index) {
            docume
