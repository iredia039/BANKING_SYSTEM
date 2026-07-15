Intermediate JavaScript Challenge
Mini Banking System

Create a banking application.

Part 1: Create an Account class

The constructor should receive

name
pin
balance

Example

const philip = new Account("Philip", 1234, 5000);
Every account should also have

Generate automatically

accountNumber

It should be a random 10-digit number.

Methods
deposit(amount)
Amount cannot be zero or negative.
Add money to balance.
Return the new balance.

withdraw(amount, pin)

Rules

PIN must match.
Amount must be greater than 0.
Balance cannot become negative.

Use

try...catch

to handle errors.

transfer(receiver, amount, pin)

Example

philip.transfer(john, 500, 1234);

Rules

Receiver must be an Account object.
PIN must match.
Sender must have enough money.
Update both balances.
changePin(oldPin, newPin)

Rules

Old PIN must match.
New PIN must be exactly 4 digits.

Hint:

Think about using regex.

checkBalance(pin)

Only show the balance if the PIN is correct.

accountInfo()

Return

Name: Philip
Account Number: 1234567890
Balance: ₦6500

Do not include the PIN.

Part 2
Create a Bank class

Constructor

bankName

Create

accounts = []
Methods
openAccount(account)

Adds an Account object.

Don't allow duplicate account numbers.

closeAccount(accountNumber)

Remove the account.

findAccount(accountNumber)

Return the account.

Use

find()
totalMoney()

Return the total money stored in the bank.

Use

reduce()
richestCustomer()

Return the account with the highest balance.

customersWithMoreThan(amount)

Return every customer whose balance is greater than the amount.

Use

filter()
sortAccounts()

Sort accounts by balance (highest first).

bankReport()

Return

========================
My Bank

Customers: 5

Total Money: ₦2,350,000

Richest Customer:
Philip (₦800,000)
========================
Part 3
Transaction History

Each account should have

transactions = [];

Whenever someone

deposits
withdraws
transfers

save a record.

Example

{
    type: "Deposit",
    amount: 5000,
    balanceAfter: 12000,
    date: "2026-07-10"
}

Create

showTransactions()
Part 4
Async Challenge

Create

loadUsers()

Fetch

https://dummyjson.com/users

Using

async/await

Print only

First Name
Last Name
Email

Wrap everything in

try...catch
Part 5
Regex

Create

isStrongPassword(password)

Password must contain

Uppercase
Lowercase
Number
Special character
Minimum 8 characters

Return

true

or

false
Bonus

Without using AI or Google if possible.

Create a function

bankStatistics()

Return

{
    totalCustomers: 10,
    averageBalance: 56000,
    richestCustomer: "Philip",
    poorestCustomer: "John",
    totalDeposits: ...,
    totalWithdrawals: ...
}