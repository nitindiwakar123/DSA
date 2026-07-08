#include <iostream>
#include <map>
#include <unordered_map>
#include <stdio.h>
using namespace std;

int main()
{
    int n = 0;
    cin >> n;
    int arr[n];
    unordered_map<int, int> hashmap;

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        hashmap[arr[i]]++;

    }

    for(auto it: hashmap) {
        cout << it.first << "->>" << it.second << endl;
    }
    
    int q;
    cin >> q;
    while(q--) {
        int number;
        cin >> number;

        cout << hashmap[number] << endl;
    }
    
}