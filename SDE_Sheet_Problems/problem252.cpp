#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

bool isomorphicString(string s, string t) {
        int n1 = s.size();
        int n2 = t.size();
        if(n1 != n2) return false;
    	vector<int> hash1(26, 0);
    	vector<int> hash2(26, 0);

        for(int i = 0; i < n1; i++) {
            hash1[int(s[i])-'a']++;
        };

        for(int i = 0; i < n2; i++) {
            hash2[int(t[i])-'a']++;
        };

        int i = 0;
        int j = 0;

        while(i < hash1.size() && j < hash2.size()) {
            while(i < hash1.size() && hash1[i] == 0) i++;
            while(j < hash2.size() && hash2[j] == 0) j++;
            cout<<hash1[i]<<hash2[j]<<endl;
            if(i < hash1.size() && j < hash2.size() && hash1[i] != hash2[j]) return false; 
            i++;
            j++;
        }
        return i == j && j == 27;
    }

int main() {
    bool result = isomorphicString("paper", "title");
    cout<<result<<endl;
    return 0;
}