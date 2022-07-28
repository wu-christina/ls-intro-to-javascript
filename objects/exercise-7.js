/* Add a qux property with value 3 to the myObj object we created
in the previous exercise. Now, examine the following code
snippets. Without running this code, can you determine whether
these two snippets produce the same output? Why? */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// snippet one
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// snippet two
for (let key in myObj) {
  console.log(key);
}

// Snippet one will only iterate its own keys, not the keys of its protoytype. It will log 'qux'.
// Snippet two will iterate myObj's own properties as well as its prototype's properties. It will log:
// qux
// foo
// bar
