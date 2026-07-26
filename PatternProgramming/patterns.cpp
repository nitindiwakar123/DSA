#include <iostream>
#include <stdio.h>
using namespace std;

void printPattern1(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        cout << endl;
        patternSize++;
    }
}

void printPattern2(int n)
{
    int patternSize = n;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        cout << endl;
        patternSize--;
    }
}

void printPattern3(int n)
{
    int patternSize = 1;
    int mid = (n / 2) + 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        cout << endl;
        if (i < mid)
            patternSize++;
        else
            patternSize--;
    }
}

void printPattern4(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << i << " ";
        }

        cout << endl;
        patternSize++;
    }
}

void printPattern5(int n)
{
    int mid = n / 2 + 1;
    int patternSize = mid;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        cout << endl;
        if (i < mid)
            patternSize--;
        else
            patternSize++;
    }
}

void printPattern6(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << i % 2 << " ";
        }

        cout << endl;
        patternSize++;
    }
}

void printPattern7(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << j << " ";
        }

        cout << endl;
        patternSize++;
    }
}

void printPattern8(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << j % 2 << " ";
        }

        cout << endl;
        patternSize++;
    }
}

void printPattern9(int n)
{
    int patternSize = 1;
    int temp = n;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << temp << " ";
        }

        cout << endl;
        temp--;
        patternSize++;
    }
}

void printPattern10(int n)
{
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = i; j >= patternSize; j--)
        {
            cout << j << " ";
        }

        cout << endl;
    }
}

void printPattern11(int n)
{
    int space = n - 1;
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= space; j++)
        {
            cout << "  ";
        }

        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        space--;
        patternSize++;
        cout << endl;
    }
}

void printPattern12(int n)
{
    int patternSize = 1;
    int val = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= patternSize; j++)
        {
            cout << val << "\t";
            val++;
        }
        cout << endl;

        patternSize++;
    }
}

void printPattern13(int n)
{
    int space = 0;
    int patternSize = n;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= space; j++)
        {
            cout << "  ";
        }

        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }
        space++;
        patternSize--;
        cout << endl;
    }
}

void printPattern14(int n)
{
    int space = n - 1;
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= space; j++)
        {
            cout << "  ";
        }
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "* ";
        }

        space--;
        patternSize += 2;
        cout << endl;
    }
}

void printPattern15(int n)
{
    int space = n - 1;
    int patternSize = 1;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= space; j++)
        {
            cout << "  ";
        }
        for (int j = 1; j <= patternSize; j++)
        {
            cout << "*   ";
        }

        space--;
        patternSize++;
        cout << endl;
    }

    // space - 2 patternSize - 1//    *   //
    // space - 1 patternSize - 2//  *   *   //
    // space - 0 patternSize - 3//*   *   *   //
}

int main()
{
    // printPattern1(7);
    // printPattern2(7);
    // printPattern3(5);
    // printPattern4(5);
    // printPattern5(5);
    // printPattern6(5);
    // printPattern7(7);
    // printPattern8(7);
    // printPattern9(7);
    // printPattern10(7);
    // printPattern11(7);
    // printPattern12(5);
    // printPattern13(5);
    // printPattern14(5);
    printPattern15(3);
    return 0;
}