#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;

// brute
// bool isSafe(vector<string> &board, int row, int col, int n)
// {

//     int dupRow = row;
//     int dupCol = col;

//     while (row >= 0 && col >= 0)
//     {
//         if (board[row][col] == 'Q')
//             return false;
//         row--;
//         col--;
//     }

//     row = dupRow;
//     col = dupCol;

//     while (col >= 0)
//     {
//         if (board[row][col] == 'Q')
//             return false;
//         col--;
//     }

//     row = dupRow;
//     col = dupCol;

//     while (row < n && col >= 0)
//     {
//         if (board[row][col] == 'Q')
//             return false;
//         row++;
//         col--;
//     }

//     return true;
// }

// void backtrack(int col, vector<string> &board, vector<vector<string>> &ans, int n)
// {
//     if (col == n)
//     {
//         ans.push_back(board);
//         return;
//     }

//     for (int row = 0; row < n; row++)
//     {
//         if (!isSafe(board, row, col, n))
//             continue;
//         board[row][col] = 'Q';
//         backtrack(col + 1, board, ans, n);
//         board[row][col] = '.';
//     }
// }

// vector<vector<string>> solveNQueens(int n)
// {
//     vector<string> board(n, string(n, '.'));
//     vector<vector<string>> ans;
//     backtrack(0, board, ans, n);

//     return ans;
// }

int backtrack(int col, vector<int> &lowerDiagonal, vector<int> &upperDiagonal, vector<int> &leftRow, vector<string> &board, int n)
{
    if (col == n)
    {
        return 1;
    }

    int count = 0;
    for (int row = 0; row < n; row++)
    {
        if (leftRow[row] == 1 || lowerDiagonal[row + col] == 1 || upperDiagonal[n - 1 + col - row] == 1)
            continue;
        board[row][col] = 'Q';
        lowerDiagonal[row + col] = 1;
        upperDiagonal[(n - 1) + (col - row)] = 1;
        leftRow[row] = 1;
        count += backtrack(col + 1, lowerDiagonal, upperDiagonal, leftRow, board, n);
        board[row][col] = '.';
        lowerDiagonal[row + col] = 0;
        upperDiagonal[(n - 1) + (col - row)] = 0;
        leftRow[row] = 0;
    }

    return count;
}

int solveNQueens(int n)
{
    vector<string> board(n, string(n, '.'));
    vector<int> upperDiagonal(2*n - 1, 0), lowerDiagonal(2*n - 1, 0), leftRow(n);
    int res = backtrack(0, lowerDiagonal, upperDiagonal, leftRow, board, n);

    return res;
}

int main()
{
    int res = solveNQueens(4);
    cout<<res<<endl;

    return 0;
}