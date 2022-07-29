/* Write a function that searches an array of strings for every
element that matches the regular expression given by its
argument. The function should return all matching elements in an
array. */


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(words, searchWord) {
	let matches = [];
	words.map(function(word) {
		if (searchWord.test(word)) {
			matches.push(word);
		}
	})
	return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
