# Question: Write a function that takes a list of numbers as input and returns a new list containing only the even numbers from the input list. Use list comprehension to solve this problem.

def get_even_numbers(input_list):
    return [num for num in input_list if num % 2 == 0]

input_str = input("Enter a list of numbers separated by spaces: ")
numbers = [int(num) for num in input_str.split()]

even_numbers = get_even_numbers(numbers)

print("Original list:", numbers)
print("Even numbers:", even_numbers)
