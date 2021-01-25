// insert() places an element in an array after something smaller than it but before something larger.
// create two arrays, sorted and unsorted
// repeat: remove the 0th element of unsorted and insert() it into sorted.
// return sorted


function insert(array, e) {
	let i = 0
	while (e > array[i]) i ++
	
	return [...array.slice(0, i), e, ...array.slice(i)]
}


function insertion_sort(array) {
  let sorted = []
	let unsorted = [...array]
	
	while (unsorted.length) {
		sorted = insert(sorted, unsorted.pop(0))
	}
	
	return sorted
}
