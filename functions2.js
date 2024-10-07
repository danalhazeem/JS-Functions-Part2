/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
    // Your code here
    let num = n%2;
    if (num==1) { console.log( "true" ) }
    else{  console.log("false") }
  }
isOdd(7);
isOdd(8);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  console.log(odd =Math.trunc( n/2))
}
oddsSmallerThan(7);


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let num = n%2;
    if (num==1) { console.log(n^2)}
    else{  console.log(n*n) }
}
squareOrDouble(5);
squareOrDouble(2);