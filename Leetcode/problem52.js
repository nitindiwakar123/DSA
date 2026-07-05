function backtrack(col, board, leftRow, lowerDiagonal, upperDiagonal, n) {
    if (col == n) {
        return 1;
    }

    let count = 0;
    for (let row = 0; row < n; row++) {
        if (leftRow[row] == 1 || lowerDiagonal[row + col] == 1 || upperDiagonal[n - 1 + col - row] == 1) continue;

        board[row][col] = "Q";
        leftRow[row] = 1;
        lowerDiagonal[row + col] = 1;
        upperDiagonal[n - 1 + col - row] = 1;
        count += backtrack(col + 1, board, leftRow, lowerDiagonal, upperDiagonal, n);
        board[row][col] = ".";
        leftRow[row] = 0;
        lowerDiagonal[row + col] = 0;
        upperDiagonal[n - 1 + col - row] = 0;
    }

    return count;
}

function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const leftRow = new Array(n).fill(0);
    const lowerDiagonal = new Array(2 * n - 1).fill(0);
    const upperDiagonal = new Array(2 * n - 1).fill(0);
    let ans = backtrack(0, board, leftRow, lowerDiagonal, upperDiagonal, n);
    return ans;
}
console.log(solveNQueens(4));