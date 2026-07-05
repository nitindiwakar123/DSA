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

function backtrack(col, board, ans, n) {
    if (col == n) {
        ans.push(board.map(r => r.join("")));
        return
    }

    for (let row = 0; row < n; row++) {
        if (!(isSafe(col, row, board, n))) continue;

        board[row][col] = "Q";
        backtrack(col + 1, board, ans, n);
        board[row][col] = ".";
    }
}

function solveNQueens(n) {
    const ans = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    backtrack(0, board, ans, n);
    return ans;
}

console.log(solveNQueens(4));