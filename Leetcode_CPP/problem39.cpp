#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// void backtrack(vector<int> &candidates, int target, int idx, vector<int> &ds, vector<vector<int>> &list, int n)
// {
//     if (idx == n || target < 0)
//         return;

//     if (target == 0)
//     {
//         list.push_back(ds);
//         return;
//     }

//     ds.push_back(candidates[idx]);
//     backtrack(candidates, target - candidates[idx], idx, ds, list, n);
//     ds.pop_back();
//     backtrack(candidates, target, idx + 1, ds, list, n);
// }

void backtrack(vector<int> &candidates, int target, int idx, vector<int> &ds, vector<vector<int>> &list, int n)
{
    if (target < 0)
        return;

    if (target == 0)
    {
        list.push_back(ds);
        return;
    }

    for (int i = idx; i < n; i++)
    {
        ds.push_back(candidates[i]);
        backtrack(candidates, target-candidates[i], i, ds, list, n);
        ds.pop_back();
    }
    
}

vector<vector<int>> combinationSum(vector<int> &candidates, int target)
{
    int n = candidates.size();
    vector<vector<int>> list;
    vector<int> ds;
    backtrack(candidates, target, 0, ds, list, n);

    return list;
}

int main()
{
    return 0;
}