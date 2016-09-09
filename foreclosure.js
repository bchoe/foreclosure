'use strict';

var steve;
var stevesLoan;
var month= 0;
var monthsUntilEvicted;

function loan(){
  var account={
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted:0,
    defaultsToForclose:5,
    foreclosed: 'false',
  };

  function missPayment(){
    account.defaulted++;
      if (account.defaulted >= account.defaultsToForclose){
        account.foreclosed = true;
      }
     //return a literal object with the following properties:
     return {

      getBalance: function(){
        return account.balance;
      },

      receivePayment: function(amount){
        if(amount<account.monthlyPayment){
          missPayment();
          account.balance--;
        }
      },

      getMonthlyPayment: function(){
        return account.monthlyPayment;
      },

      isForclosed: function(){
        return account.foreclosed;
      },
    };
  }

  function borrower(loan){
    var account={
      monthlyIncome:1350,
      funds:2800,
      loan:loan,
    };
  }
return stevesLoan;
}
