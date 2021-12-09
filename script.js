
const accountObject = {
  accountName: "Britney Spears",
  balance: 100,
  getBalance: function() {
    alert(`Your account balance is $${this.balance}`);
  },
  deposit: function() {
    let dep = parseFloat(prompt("How much would you like to deposit? Enter an amount."));
    if (dep >= 1) {
      alert(`Your new balance is $${(this.balance) + (dep)}`);
      console.log((this.balance) + (dep));
      atm();
    } else if (dep === null || " " || isNaN(dep)) {
      this.accountError();
      this.deposit();
    } 
    
  },
  withdrawal: function() {
    let wit = parseFloat(prompt("How much would you like to withdraw? Enter an amount."));
    if (wit >= 1) {
      alert(`Your new balance is $${(this.balance) - (wit)}`);
      console.log((this.balance) - (wit));
      atm();
    } else if (wit > this.balance) {
      alert("Sorry, you do not have enough funds to complete this transaction.")
      this.withdrawal();
    } else if (wit === null || " " || isNaN(wit)) {
      this.accountError();
      this.withdrawal();
    }
  },
  getAccountName: function() {
  alert(`This account belongs to ${this.accountName}`); 
  },
  accountError: function() {
  alert('Please enter a valid amount');

  },
  exitAccount: function () {

  },
  
};

function atm() {
let choice = parseInt(prompt("Welcome to the ATM. Please select an option from the following menu: 1)Check balance 2)Make a deposit 3)Make a withdrawal 4)Get account holder's name 5)Exit"));
  if (choice === 1) {
  accountObject.getBalance();
  atm();
  } else if (choice === 2){
    accountObject.deposit();
  } else if (choice === 3) {
    accountObject.withdrawal();

  } else if (choice === 4) {
    accountObject.getAccountName();
    atm();
  }  else if (choice === 5) {
    alert("Operation finished. Press OK to close.")
  } else {
    alert("Please select a valid option");
    atm();
  } 
}
atm();
