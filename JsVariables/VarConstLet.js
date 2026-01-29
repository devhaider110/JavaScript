const accountId = 145632 // the value never be changed
let accountEmail = "haider@123.com" // the value can be change
var accountPassword ="1234" // can be change,there is no scope of var
//pefer not use var,beacuse of the issue in block scope and function scope
accountCity ="Jaunpur"///variable can also use like this,but never use this method
let accountState;// if we decare the varibale and not define the value to it,js give undefined

// accountId = 2

// accountEmail = "sayed@123.com"
// console.log(accountEmail);
// accountPassword ="abc"
// console.log(accountPassword);
accountCity="saidanpur"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);