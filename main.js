<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>x o/title>
    <link rel="stylesheet" href="styles.css">
    <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
    border: 2px solid #333;
    border-radius: 10px;
    width: 320px;
    height: 320px;
    background-color: #eee;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    background-color: #fff;
}

.cell:hover {
    background-color: #f0f0f0;
}

.result {
    margin-top: 20px;
    font-size: 1.2em;
}

.btn-reset {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-reset:hover {
    background-color: #45a049;
}

    </style>
</head>
<body>
    <div class="container">
        <h1>Tic-Tac-Toe</h1>
        <div id="board" class="board">
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
        <div id="result" class="result"></div>
        <button onclick="resetGame()" class="btn-reset">Reset</button>
    </div>

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
            document.getElementById(`cell-${index}`).innerText = gameStatus[index];
        }

        function isGameOver() {
            for (var i = 0; i < winningCombinations.length; i++) {
                var [a, b, c] = winningCombinations[i];
                if (gameStatus[a] !== '' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
                    return true;
                }
            }
            return false;
        }

        function resetGame() {
            currentPlayer = 'X';
            gameStatus = ['', '', '', '', '', '', '', '', ''];
            for (var i = 0; i < 9; i++) {
                document.getElementById(`cell-${i}`).innerText = '';
            }
            document.getElementById('result').innerText = '';
        }
    </script>
</body>
</html>
