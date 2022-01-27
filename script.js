const accountObject = {
  accountName: "Britney Spears",
  balance: 100,
  getBalance: function() {
    alert(`Your account balance is $${this.balance}`);
    console.log(this.balance);
  },
  deposit: function() {
    let dep = parseFloat(prompt("How much would you like to deposit? Enter an amount or enter 0 to cancel the operation."));
    
    if (dep >= 1) {
      alert(`Your new balance is $${(this.balance) + (dep)}`);
      console.log((this.balance) + (dep));
      // atm();
    } else if (Number.isNaN(dep) ){
      this.accountError();
      this.deposit();
    } else {
      this.cancelOperation();
    }
    
  },
  withdrawal: function() {
    let wit = parseFloat(prompt("How much would you like to withdraw? Enter an amount."));
    if (wit >= 1) {
      alert(`Your new balance is $${(this.balance) - (wit)}`);
      console.log((this.balance) - (wit));
      // atm();
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
  cancelOperation: function() {
    alert('Operation cancelled');
  }
  
};

function atm() {
let choice = parseInt(prompt("Welcome to the ATM. Please select an option from the following menu: 1)Check balance 2)Make a deposit 3)Make a withdrawal 4)Get account holder's name 5)Exit"));
  if (choice === 1) {
  accountObject.getBalance();
  // atm();
  } else if (choice === 2){
    accountObject.deposit();
  } else if (choice === 3) {
    accountObject.withdrawal();

  } else if (choice === 4) {
    accountObject.getAccountName();
    // atm();
  }  else if (choice === 5) {
    alert("Operation finished. Press OK to close.");
  } else {
    alert("Please select a valid option");
    // atm();
  } 
}
// atm();

      //this.accountError();
      //this.deposit();



/* The reason why we use the parseInt and parseFloat methods is so that javascript can
detect the numbers included in, for example, the menu options and provide the user 
with the correct choice depending on their input */

/* Some parts of the code don't make sense when connected to the DOM but they can be
re-implemented if necessary by either uncommenting them on the JS file or commenting
out the buttons on the index file */