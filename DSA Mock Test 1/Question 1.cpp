\\Question 1
#include <iostream>

using namespace std;

void moveZeroes(int* nums, int length) {
    int left = 0;   // Points to the current non-zero element
    int right = 0;  // Points to the next element to be checked
    
    // Move non-zero elements to the left
    while (right < length) {
        if (nums[right] != 0) {
            // Swap the current non-zero element with the left pointer
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
    
    // Set all elements after the left pointer to 0
    while (left < length) {
        nums[left] = 0;
        left++;
    }
}

int main() {
    int length;
    cout << "Enter the length of the array: ";
    cin >> length;
    
    int* nums = new int[length];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < length; i++) {
        cin >> nums[i];
    }
    
    moveZeroes(nums, length);
    
    cout << "Modified array: [";
    for (int i = 0; i < length - 1; i++) {
        cout << nums[i] << " ";
    }
    cout << nums[length - 1] << "]" << endl;
    
    delete[] nums;
    
    return 0;
}
