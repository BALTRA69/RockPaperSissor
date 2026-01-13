# sisor paper rock
import random

option = ["sissors", "paper", "rock"]
random_choice = random.choice(option)

index = option.index(random_choice)

# comp  per s  p  r
# s         D  cw pw
# p         pw D  cw
# r         cw pw D
result_matrix = [
    ["----Draw----", "----Computer wins----", "----You win----"],
    ["----You win----", "----Draw----", "----Computer wins----"],
    ["----Computer wins----", "----You win----", "----Draw----"],
]
choice = int(input("0 for sissors,1 for paper,2 for rock:\n"))
match (choice):
    case 0:
        print("You chose: sissors")
    case 1:
        print("You chose: paper")
    case 2:
        print("You chose: rock")
print(f"Computer chose: {random_choice}")
print(result_matrix[index][choice])
