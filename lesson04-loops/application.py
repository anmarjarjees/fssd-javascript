print("testing python")

# continue keyword: Same as JS
print("continue:")
for i in range(0, 10):
    if i == 5:
        continue
    print(i)  # 012346789

# break keyword: Same as JS
print("break:")
for i in range(0, 10):
    if i == 5:
        break
    print(i)  # 01234

# pass keyword: only on Py
print("pass:")
for i in range(0, 10):
    if i == 5:
        pass  # will only pass the if condition code and continue with the for loop
    print(i)  # 012346789


# in Py => True while in JS => true
while True:
    # keep_going variable is waiting to receive the user input => Y or N
    keep_going = input('Would you like to continue? (Y/N) ')

    if keep_going == 'N' or keep_going == 'n':
        print('You entered N. Exiting!')
        break
    else:
        print('You entered Y. We will keep going!')
