#include <iostream>
#include <unordered_map>
using namespace std;

int firstUniqChar(const string& s) {
    unordered_map<char, int> char_count;

    // Step 1: Count the frequency of each character
    for (char c : s) {
        if (char_count.find(c) != char_count.end()) {
            char_count[c]++;
        } else {
            char_count[c] = 1;
        }
    }

    // Step 2: Find the first non-repeating character
    for (int i = 0; i < s.length(); i++) {
        if (char_count[s[i]] == 1) {
            return i;
        }
    }

    return -1;
}

int main() {
    string s;
    cout << "Enter a string: ";
    cin >> s;

    int index = firstUniqChar(s);
    cout << "First Unique Character index: " << index << endl;

    return 0;
}
