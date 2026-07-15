Intermediate JavaScript Challenge — Mini Banking System

Part 1: Account class

Big picture: this is one class that represents a single bank customer. Everything below (deposit, withdraw, transfer, etc.) is a method living on that class, and they all read/write the same this.balance, this.pin, etc.

Constructor

Takes: name, pin, balance

jsconst philip = new Account("Philip", 1234, 5000);

Store all three as this.name, this.pin, this.balance — standard constructor assignment, nothing tricky here.

Auto-generated property


accountNumber — random 10-digit number, generated automatically (not passed in).
Since it's not a constructor parameter, you generate it inside the constructor by calling a method (like you already did) and assigning the result to this.accountNumber.
"10-digit" means the number should be somewhere between 1000000000 and 9999999999 — think about how to scale Math.random() so it lands in that range, not just 0 to n.


Methods

deposit(amount)


What it does: takes money and adds it to the account.
Validation first: if amount <= 0, don't proceed — either throw an error or just return/log a message, your call, but don't silently add a bad value.
Then: this.balance += amount.
Finally: return this.balance so the caller can see the updated total.


withdraw(amount, pin)


What it does: takes money out, but only if the caller proves identity (pin) and there's enough money.
The three rules to check, in order: (1) does pin match this.pin? (2) is amount > 0? (3) would this.balance - amount go below 0?
If any rule fails, throw new Error("...") with a message describing what went wrong.
Wrap the call site (or the body) in try...catch so a failed withdrawal doesn't crash the whole program — it should just report the error and move on.
If everything passes: subtract from balance and return the new balance.


transfer(receiver, amount, pin)

jsphilip.transfer(john, 500, 1234);


What it does: moves money from this account into another account object.
receiver must actually be an Account — check with receiver instanceof Account.
Same PIN and balance checks as withdraw.
If everything checks out: reduce this.balance by amount, increase receiver.balance by amount. Two accounts, two updates, one transaction.


changePin(oldPin, newPin)


What it does: lets the user set a new PIN, but only if they know the old one and the new one is valid.
Check oldPin === this.pin first.
Then validate newPin is exactly 4 digits. This is where regex comes in — a pattern like /^\d{4}$/ tests "exactly 4 digit characters, nothing else."
If both checks pass, update this.pin.


checkBalance(pin)


What it does: a "safer" way to view balance than just reading .balance directly — it gates the read behind a PIN check.
If pin matches, return this.balance. If not, don't reveal it (throw or return a message like "Incorrect PIN").


accountInfo()


What it does: gives a readable summary of the account, deliberately leaving the PIN out.
Returns a string built from the account's own properties, e.g. using a template literal:


Name: Philip
Account Number: 1234567890
Balance: ₦6500


Part 2: Bank class

Big picture: this is a second, separate class that manages a collection of Account objects. It doesn't replace Account — it holds an array of them and provides operations across the whole group. This is where you practice array methods (find, reduce, filter, sort) instead of manual loops.

Constructor

Takes: bankName
Creates: accounts = [] — an empty array to store Account instances as they're opened.

Methods

openAccount(account)


What it does: adds a new Account to this.accounts.
Before pushing, check whether an account with the same accountNumber already exists in the array (loop or .some()/.find()) — if it does, reject it (throw or log an error) instead of adding a duplicate.


closeAccount(accountNumber)


What it does: removes one account from the array by its number.
Reassign this.accounts to a filtered version that excludes the matching account (this.accounts = this.accounts.filter(...)).


findAccount(accountNumber)


What it does: locates and returns a single account object.
Use this.accounts.find(acc => acc.accountNumber === accountNumber) — find() returns the first match or undefined.


totalMoney()


What it does: sums every account's balance into one number.
reduce() is built for exactly this: start with 0, add each account's balance as you go through the array.


richestCustomer()


What it does: finds the single account with the highest balance.
You can do this with reduce() (compare current "richest so far" against each account) or by sorting and taking the first — either works, but reduce avoids a full sort just to get one value.


customersWithMoreThan(amount)


What it does: returns a new array of accounts whose balance exceeds amount.
filter() is literally designed for this — pass a condition, get back only matching elements.


sortAccounts()


What it does: reorders this.accounts so the wealthiest customers come first.
Array.prototype.sort() with a compare function: (a, b) => b.balance - a.balance sorts descending by balance.


bankReport()


What it does: builds a human-readable summary string using the other methods above (accounts.length, totalMoney(), richestCustomer()).
Returns something like:


========================
My Bank

Customers: 5

Total Money: ₦2,350,000

Richest Customer:
Philip (₦800,000)
========================


Part 3: Transaction history

Big picture: this goes back into the Account class and adds logging — every money-moving method should leave a paper trail.


Add this.transactions = [] in the Account constructor, alongside accountNumber.
Inside deposit, withdraw, and transfer, after the balance actually changes, push a record describing what happened:


js{
    type: "Deposit",
    amount: 5000,
    balanceAfter: 12000,
    date: "2026-07-10"
}


date can come from new Date().toISOString().split("T")[0] to get just the date portion.
showTransactions() just loops over this.transactions and prints/returns them — no new logic, just display.



Part 4: Async challenge

Big picture: this is unrelated to the bank — it's practice fetching real data from an API.

loadUsers()


fetch() returns a Promise, so mark the function async and await both the fetch() call and the .json() call on the response.
The response shape is { users: [...] } — you need data.users, not data directly.
For each user, log/print only firstName, lastName, and email (check the actual field names in the response — that's your job to inspect, not guess).
Wrap the fetch + parsing in try...catch so a network failure doesn't crash the function — log a friendly error instead.



Part 5: Regex

Big picture: one standalone function, no class involved — takes a string, returns a boolean.

isStrongPassword(password)


You need to check for 5 separate conditions: length ≥ 8, at least one uppercase, one lowercase, one number, one special character.
Two ways to approach it: (a) one big regex with lookaheads that checks all conditions at once, or (b) several small .test() checks combined with && — easier to read while you're learning.
Return true only if every condition passes, otherwise false.



Bonus (try without AI/Google if possible)

Big picture: this lives on the Bank class — it's bankReport()'s more data-heavy cousin, returning an object instead of a string.

bankStatistics()


Most of these numbers are things you already have methods for (totalMoney(), richestCustomer()) — reuse them instead of recalculating.
averageBalance = total money ÷ number of customers.
poorestCustomer is the mirror of richestCustomer() — same logic, opposite comparison.
totalDeposits/totalWithdrawals: loop through every account's transactions array and sum up amounts by type — this is where Part 3's logging pays off.
Returns something like:


js{
    totalCustomers: 10,
    averageBalance: 56000,
    richestCustomer: "Philip",
    poorestCustomer: "John",
    totalDeposits: ...,
    totalWithdrawals: ...
}