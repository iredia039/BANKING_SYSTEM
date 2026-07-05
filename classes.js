class bankAccount {
    bank = 1234
    constructor(name, amount, accountType) {
        this.name = name
        this.accountNumber = this.generateAccountNumber()
        this.balance = amount
        this.accountType = accountType
        this.isFrozen = false
        this.isDeactivated = false
        this.isActive = true
        // this.generateAccountNumber()
        // this.deposit()
        // this.withdraw()
    }

    generateAccountNumber(){
    //    this.accountNumber = 
      return Math.floor(Math.random() * 10000000000);
    }

    deposit(money){
        if (this.isFrozen === true) {
            console.log('you cannot deposit because this account ois frozen')
          
        } else if (this.isDeactivated === true) {
             console.log('you cannot deposit because this account is deactivated')
          
        } else if (this.accountType !== 'savings' && this.accountType !== 'current') {
            console.log('account type does not exist')
        } else {
              this.balance += money 
        }
    }

    withdraw(amount){
        if (this.isFrozen === true) {
            console.log('you cannot deposit because this account ois frozen')
          
        } else if (this.accountType !== 'savings' && this.accountType !== 'current') {
            console.log('account type does not exist')
        } else if (this.isDeactivated === true) {
             console.log('you cannot deposit because this account is deactivated')
          
        } else if (this.balance < amount) {
            console.log('insufficient balance')
        } else {
             this.balance -= amount
        }
        
    }

    frozen(code){
        if (code === this.bank) {
        this.isFrozen = true
            
        } else {
            console.log('you don\'t have permission to freeze');
            
        }
    };


    deactivated(password){
        if (password === this.accountNumber || password === this.bank) {
             this.isDeactivated = true
        } else {
            console.log('you don\'t have performancemission to deactivate');
            
        }
       
    }

    activate(user){
        if (user !== this.bank ) {
           console.log('you don\'t have access to this feature');
           
        } else {
             this.isDeactivated = false
        }
    }

    transfer(amount, recipientAccount, type) {
    if (this.isDeactivated === true) {
       console.log('you can\'t send money cause your account is deactivated');

    } else if (this.isFrozen === true) {
         console.log('you cannot transfer because this account ois frozen')

    } else if (this.isActive !== true) {
    console.log('account is inactive');
    
    } else if (this.accountType !== 'savings' && this.accountType !== 'current') {
            console.log('account type does not exist')

        } else if (recipientAccount === undefined) {
        console.log('account does not exist');
        
    } else if (this.balance >= amount) {
         this.balance -= amount
         recipientAccount.balance += amount
    } else if (this.balance < amount) {
        console.log('insufficient balance');
        
    } 
}
};