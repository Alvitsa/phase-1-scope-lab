var customerName = 'bob';

// Function to uppercase the global 'customerName'.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  // See the consequences of declaring a variable in global scope, by writing a new function that changes that bestCustomer variable to 'maybe bob'.
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  
  // Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
  const leastFavoriteCustomer = 'someone';
  
  // Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
  function changeLeastFavoriteCustomer() {
    // Attempt to change the value of a constant
    leastFavoriteCustomer = 'someone else';
    // JavaScript will throw an error in strict mode or silently fail in non-strict mode.
  }