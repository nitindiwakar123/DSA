#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// Optimal
// time - O(log n)
// space - O(1)
int getLeastFrequentDigit(int n)
{
    int maxDigit = 0;
    int num = n;
    vector<int> hash(10, 0);

    while (n > 0)
    {
        hash[(n % 10)]++;
        n = n / 10;
    }

    int minFreq = num;
    int minDigit = num;

    for (int i = 0; i < hash.size(); i++)
    {
        if(hash[i] == 0) continue;
        if (hash[i] < minFreq)
        {
            minFreq = hash[i];
            minDigit = i;
        }
    }

    return minDigit;
}

int main()
{
    int res = getLeastFrequentDigit(1111122222);
    cout << res << endl;
    return 0;
}