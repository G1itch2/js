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
                document.getElementById(`cell-${index}`).innerText = currentPlayer;
                if (isGameOver()) {
                    document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
                } else if (!gameStatus.includes('')) {
                    document.getElementById('result').innerText = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
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