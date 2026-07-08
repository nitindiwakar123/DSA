// brute
// Time - O(n) + O(n) + O(n) + O(n) - O(4n)
// Space - O(n*n) 
// function isSafe(col, row, board, n) {
//     let tempRow = row;
//     let tempCol = col;

//     while (row >= 0 && col >= 0) {
//         if (board[row][col] == "Q") return false;
//         row--;
//         col--;
//     }

//     row = tempRow;
//     col = tempCol;

//     while (col >= 0) {
//         if (board[row][col] == "Q") return false;
//         col--;
//     }

//     col = tempCol;

//     while (row <= n - 1 && col >= 0) {
//         if (board[row][col] == "Q") return false;
//         row++;
//         col--;
//     }

//     return true;
// }

// take column as pointer index
// function backtrack(col, board, n) {
//     if (col == n) {
//         return 1;
//     }

//     let count = 0;
//     for (let row = 0; row < n; row++) {
//         if (!(isSafe(col, row, board, n))) continue;
//         board[row][col] = "Q";
//         count += backtrack(col + 1, board, n);
//         board[row][col] = ".";
//     }

//     return count;
// }

// function totalNQueens(n) {
//     const board = Array.from({ length: n }, () => Array(n).fill('.'));
//     let ans = backtrack(0, board, n);
//     return ans;
// }

// console.log(totalNQueens(4));

// optimal
// Time - O(n) + O(n) + O(n) + O(n) - O(4n)
// Space - O(n*n) 
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

function totalNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const leftRow = new Array(n).fill(0);
    const lowerDiagonal = new Array(2 * n - 1).fill(0);
    const upperDiagonal = new Array(2 * n - 1).fill(0);
    let ans = backtrack(0, board, leftRow, lowerDiagonal, upperDiagonal, n);
    return ans;
}

// console.log(totalNQueens(4));