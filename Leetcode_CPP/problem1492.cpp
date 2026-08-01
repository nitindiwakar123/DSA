#include <iostream>
#include <stdio.h>
using namespace std;

// optimal
int kthFactor(int n, int k)
{
    int count = 0;

    for (int i = 0; i <= n/2; i++)
    {
        if(n % i == 0) {
            count++;

            if(count == k) 
            return i;
        }
    }

    count += 1;
    
    return count == k? n: -1;
}

int main()
{

    return 0;
}