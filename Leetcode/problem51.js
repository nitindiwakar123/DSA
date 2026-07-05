// 51. N-Queens

// brute
// Time - O(n) + O(n) + O(n) + O(n) - O(4n)
// Space - O(n*n) 
function isSafe(col, row, board, n) {
    let tempRow = row;
    let tempCol = col;

    while (row >= 0 && col >= 0) {
        if (board[row][col] == "Q") return false;
        row--;
        col--;
    }

    row = tempRow;
    col = tempCol;

    while (col >= 0) {
        if (board[row][col] == "Q") return false;
        col--;
    }

    col = tempCol;

    while (row <= n - 1 && col >= 0) {
        if (board[row][col] == "Q") return false;
        row++;
        col--;
    }

    return true;
}

// function backtrack(col, board, ans, n) {
//     if (col == n) {
//         ans.push(board.map(r => r.join("")));
//         return
//     }

//     for (let row = 0; row < n; row++) {
//         if (!(isSafe(col, row, board, n))) continue;

//         board[row][col] = "Q";
//         backtrack(col + 1, board, ans, n);
//         board[row][col] = ".";
//     }
// }

// function solveNQueens(n) {
//     const ans = [];
//     const board = Array.from({ length: n }, () => Array(n).fill('.'));
//     backtrack(0, board, ans, n);
//     return ans;
// }


// optimal with hashing
function backtrack(col, board, ans, leftRow, lowerDiagonal, upperDiagonal, n) {
    if (col == n) {
        ans.push(board.map(r => r.join("")));
        return
    }

    for (let row = 0; row < n; row++) {
        if (leftRow[row] == 1 || lowerDiagonal[row + col] == 1 || upperDiagonal[n - 1 + col - row] == 1) continue;

        board[row][col] = "Q";
        leftRow[row] = 1;
        lowerDiagonal[row + col] = 1;
        upperDiagonal[n - 1 + col - row] = 1;
        backtrack(col + 1, board, ans, leftRow, lowerDiagonal, upperDiagonal, n);
        board[row][col] = ".";
        leftRow[row] = 0;
        lowerDiagonal[row + col] = 0;
        upperDiagonal[n - 1 + col - row] = 0;
    }
}

function solveNQueens(n) {
    const ans = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const leftRow = new Array(n).fill(0);
    const lowerDiagonal = new Array(2 * n - 1).fill(0);
    const upperDiagonal = new Array(2 * n - 1).fill(0);
    backtrack(0, board, ans, leftRow, lowerDiagonal, upperDiagonal, n);
    return ans;
}
console.log(solveNQueens(4));