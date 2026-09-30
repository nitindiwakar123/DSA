#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

class Solution{	
	public:
		string longestCommonPrefix(vector<string>& str){
            int n = str.size();
			string temp = str[0];

            for(int i = 1; i<n; i++) {
                int j = 0;
                int k = 0;
                string currStr = str[i];

                while(j < currStr.size() && k < temp.size() && currStr[j] == temp[k]){
                    j++;
                    k++;
                };

                if(temp.size() > j+1) {
                    temp = currStr.substr(0, j);
                }
            }

            return temp;
		}
};