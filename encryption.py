# st = input("Enter a string:")
# words = st.split(" ")
# coding = int(input("Do you want to code or decode the string(1/0):"))
# if coding == 1:
#     coded_words = []
#     for word in words:
#         f3 = "afd"
#         l3 = "hf3"
#         if len(word) >= 3:
#             fletter = word[0]
#             cstring = f3 + word[1:] + fletter + l3
#             coded_words.append(cstring)
#         else:
#             coded_words.append(word[::-1])
#     print(" ".join(coded_words))

# elif coding == 0:
#     coded_words = []
#     for word in words:
#         if len(word) >= 3:
#             word = word[3:-3]
#             cstring = word[-1] + word[:-1]
#             coded_words.append(cstring)
#         else:
#             coded_words.append(word[::-1])
#     print(" ".join(coded_words))

import random
import string


def random_chars(n=3):
    return "".join(random.choice(string.ascii_lowercase) for _ in range(n))


def encode(message):
    words = message.split()
    coded_words = []

    for word in words:
        if len(word) >= 3:
            first_letter = word[0]
            new_word = word[1:] + first_letter
            encoded_words = random_chars() + new_word + random_chars()
            coded_words.append(encoded_words)
        else:
            encoded_words = word[::-1]
            coded_words.append(encoded_words)
    return " ".join(coded_words)


def decode(message):
    words = message.split()
    decoded_words = []
    for word in words:
        if len(word) >= 3:
            new_word = word[3:-3]
            decoded = new_word[-1] + new_word[:-1]
            decoded_words.append(decoded)
        else:
            new_word = word[::-1]
            decoded_words.append(new_word)
    return " ".join(decoded_words)


while True:
    choice = int(input("Enter:\n1)encode\n2)decode\n3)exit\n"))
    match choice:
        case 1:
            msg = input("Enter a messafe to encode:")
            print(encode(msg))
        case 2:
            msg = input("Enter a message to decode:")
            print(decode(msg))
        case 3:
            print("Exiting ")
            break
        case _:
            print("Invalid choice")
