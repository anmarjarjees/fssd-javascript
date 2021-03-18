sports = ["Basketball", "Football", "Tennis", "Chess", "Swimming", "Running"]

for sport in sports:
    print(sport)


# Create a set
directions = set(['north', 'south', 'east', 'west'])

# Print its members
for direction in directions:
    print(direction)

# Add an item to the set:
directions.add('northwest')

print()
# Print the members again
# Notice the order cannot be relied upon!
for direction in directions:
    print(direction)


# Create a dictionary of food groups
foods = {
    'dairy': ['milk', 'cheese', 'yogurt'],
    'grains': ['oats', 'cereal', 'pasta'],
    'fats_and_sweets': ['chocolate', 'sugar', 'butter'],
    'fruits': ['apples', 'oranges', 'bananas'],
    'vegetables': ['broccoli', 'beans', 'peas']
}

# Print the entire dairy group
print(foods['dairy'])

# Print specific foods from the dairy group
print(foods['dairy'][0])
print(foods['dairy'][1])
print(foods['dairy'][2])
