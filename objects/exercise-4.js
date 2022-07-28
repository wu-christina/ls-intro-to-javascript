/* Create an array from the keys of the object obj below, with
all of the keys converted to uppercase. Your implementation must
not mutate obj. */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objectKeys = Object.keys(obj);
let uppercaseKeys = objectKeys.map((key) => {
	return key.toUpperCase();
})
console.log(uppercaseKeys);
console.log(obj);
