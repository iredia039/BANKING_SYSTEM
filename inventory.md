Build an Inventory class for a small store:
Constructor — takes no arguments, initializes an empty array of items. Each item will be an object: { name, price, quantity }.
addItem(name, price, quantity) — adds a new item to the inventory.
totalValue() — uses .reduce() to return the total value of all inventory (price × quantity, summed across all items).
filterExpensive(minPrice) — uses .filter() to return an array of item names (just the names, as strings) where price >= minPrice.
applyDiscount(percent) — uses .map() to return a new array of items with their prices reduced by that percent (don't mutate the original items).
mostCommonWord() — takes all the item name strings, splits them into individual words, and returns the word that appears most often across all names (ignore case). If there's a tie, return whichever word appeared first.