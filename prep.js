// function secondLargest(arr) {
    
//     let mt = arr[0];
//     let second = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (mt > arr[i]) {
//             mt += arr[i]
//         }
        
//     }
// }

function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest

            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]
        } {

        }
        
    }

    return secondLargest;
}

// console.log(secondLargest([10, 3, 4, 20, 20, 5]));

function anagram(word, target) {
    
    let sorted = word.split('').sort().join('').trim().toLowerCase();
    let sort2 = target.split('').sort().join('').trim().toLowerCase();
    let final = false

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sort2[i] && sorted.length === sort2.length) {
            final = true
        } else{
            break
        }
        
    }
    return final
}

// console.log(anagram('listen', 'sile  nt'));



class Account {
    constructor(name, pin, balance) {
        this.name = name
        this.pin = pin
        this.balance = balance
        this.accountNumber = this.generateAccountNumber()
        // this.BalanceCheck = this.checkBalance()
    }

    generateAccountNumber(){
       return Math.floor(Math.random() * 100000000)
        
    }

    deposit(amount){
        if (amount <= 0) {
            console.log(`you can't deposit 0 or lesser`);
        } else {
            this.balance += amount
        }
    }

    withdraw(amount, pin){
        if (pin !== this.pin || amount < 0 || this.balance - amount <= 0) {
            console.log(`wrong`);
            
        } else {
            this.balance -= amount
        }
    }

    transfer(receiver, amount, pin){
        if (pin !== this.pin || this.balance <= 0) {
            console.log(`wrong stuff`);
            
        } else{
            this.balance -= amount
            receiver.balance += amount
        }
    }



    changePin(oldPin, newPin) {
    let pattern = /^[0-9]{4}$/;

    if (oldPin !== this.pin) {
        console.log(`incorrect pin`);
        
    } else if (!pattern.test(newPin)) {
        console.log(`pin should be 4 digits`);
        
    } else {
        this.pin = newPin
    }
}

    checkBalance(pin){
        if (pin !== this.pin) {
            return `you cannot check balance due to incorrect pin`
            
        } else{
             return this.balance
             
        }
    }

    accountInfo(pin){
        if (pin !== this.pin) {
            console.log(`you can't request this info`);
        } else{
        return `name: ${this.name}
account Number: ${this.accountNumber}
balance: ${this.balance}`
        }
    }
}

let user = new Account('yuji', 1234, 500);
let user2 = new Account('gojo', 1234, 500);

user.deposit(5000)
// user.withdraw(5500)

// user.changePin(1234, 9876988)

// user.transfer(user2, 1000, 1234)

console.log(user.checkBalance(12934));

console.log(user.accountInfo(1234))

// console.log(user);

// console.log(user);

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.accounts = [];
    }

    openAccount(account) {
    const existing = this.accounts.find(acc => acc.accountNumber === Account.accountNumber);

    if (existing) {
        return `number already exist`
    } else {
        this.accounts.push(existing)
    }

    }

    closeAccount(accountNumber) {
        // reassign this.accounts using filter()
    }

    findAccount(accountNumber) {
        // use find()
    }

    totalMoney() {
        // use reduce()
    }

    richestCustomer() {
        // use reduce() or sort + [0]
    }

    customersWithMoreThan(amount) {
        // use filter()
    }

    sortAccounts() {
        // use sort(), descending by balance
    }

    bankReport() {
        // build a string using this.accounts.length, totalMoney(), richestCustomer()
    }
}
