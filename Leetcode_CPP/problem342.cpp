#include <iostream>
#include <stdio.h>
using namespace std;

bool powerOfFour(int n) {
    while (n%4==0)
        n = n/4;
        
    return n == 1;
}

int main() {
    return 0;
}