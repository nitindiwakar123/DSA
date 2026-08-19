#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

void zigZagMerge(vector<int>& arr1, vector<int>& arr2) {
    vector<int> merged = {};

    int i = 0;
    int j = 0;

    while (i < arr1.size() && j < arr2.size())
    {
        merged.push_back(arr1[i++]);
        merged.push_back(arr2[j++]);
    }

    while (i < arr1.size())
    {
        merged.push_back(arr1[i++]);
    }

    while (j < arr2.size())
    {
        merged.push_back(arr2[j++]);
    }
    
    for (int i = 0; i < merged.size(); i++)
    {
        cout<<merged[i]<<endl;
    }
    
}

int main()
{
    vector<int> arr1 = {20, 30, 50};
    vector<int> arr2 = {2, 4, 6, 8, 10};

    zigZagMerge(arr1, arr2);
    return 0;
}