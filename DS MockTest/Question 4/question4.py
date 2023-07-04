# Write a Python program that takes two lists of numbers as input, representing two samples.
# The program should perform a two-sample t-test using the 'scipy.stats' module and calculate the p-value.
# After inputting the two lists of numbers, the program should display the calculated p-value as output.

from scipy.stats import ttest_ind

def perform_hypothesis_test(sample1, sample2):
    t_statistic, p_value = ttest_ind(sample1, sample2)
    return p_value

def main():
    try:
        sample1_str = input("Enter the first list of numbers separated by spaces: ")
        sample1 = [float(num) for num in sample1_str.split()]

        sample2_str = input("Enter the second list of numbers separated by spaces: ")
        sample2 = [float(num) for num in sample2_str.split()]

        p_value = perform_hypothesis_test(sample1, sample2)
        print("P-value:", p_value)
    except ValueError:
        print("Invalid input! Please enter valid lists of numbers separated by spaces.")

if __name__ == "__main__":
    main()
