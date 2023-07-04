# Write a function called ‘calculate_mean’ that takes a list of numbers as input and returns the mean (average) of the numbers. The function should calculate the mean using the sum of the numbers divided by the total count.
def calculate_mean(numbers):
    if not numbers:
        return 0

    total_sum = sum(numbers)
    total_count = len(numbers)
    mean = total_sum / total_count
    return mean

def main():
    try:
        num_str = input("Enter a list of numbers separated by spaces: ")
        numbers_list = [float(num) for num in num_str.split()]
        mean_value = calculate_mean(numbers_list)
        print("Mean:", mean_value)
    except ValueError:
        print("Invalid input! Please enter a list of numbers separated by spaces.")

if __name__ == "__main__":
    main()
