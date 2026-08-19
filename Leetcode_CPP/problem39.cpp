#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

void backtrack(vector<int> &candidates, int target, int idx, vector<int> &ds, int sum, vector<vector<int>> &list, int n)
{
    if (idx == n || sum > target)
        return;

    if (sum == target)
    {
        list.push_back(ds);
        return;
    }

    ds.push_back(candidates[idx]);
    backtrack(candidates, target, idx, ds, sum + candidates[idx], list, n);
    ds.pop_back();
    backtrack(candidates, target, idx + 1, ds, sum, list, n);
}

vector<vector<int>> combinationSum(vector<int> &candidates, int target)
{
    int n = candidates.size();
    vector<vector<int>> list;
    vector<int> ds;
    backtrack(candidates, target, 0, ds, 0, list, n);

    return list;
}

int main()
{
    return 0;
}