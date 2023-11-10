# Simple commiting by J-Agostino
# Faster than writing in the console
# 
# This program is still being developed.
#------------------------------------------
import subprocess

def commiting():
    commit_msg = ["0. Write yours", "1. Update", "2. New Branch\n"]
    print("\nSelect a message to commit\n")
    for i in commit_msg:
        print(i)
    msg_selection = int(input("Number: "))

    if msg_selection == 0:
        my_msg = input("\nWrite your commit message: ") #NOTE we need "" for writing
    elif msg_selection == 1:
        my_msg = '"Update"'
    elif msg_selection == 2:
        my_msg = '"New Branch"'

    subprocess.run(["git", "commit", "-m", my_msg])
    subprocess.run(["git", "push"])


stat_add = ["0. Status", "1. Add all\n"]
print("\nWanna see the status or pushing?\n")
for i in stat_add:
    print(i)

first_selection = int(input("Number: "))

if first_selection == 0:
    print("\n")
    subprocess.run(["git", "status"])
elif first_selection == 1:
    subprocess.run(["git", "add", "."])
    print("\nEverything added")
else:
    print("bye!\n")
    exit()

if first_selection == 1:
    commiting()
else:
    print("bye!\n")
    exit()

