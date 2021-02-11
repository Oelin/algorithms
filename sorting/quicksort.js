// 1. define base case
// 2. choose pivot
// 3. put elements less than the pivot in a left partition and those greater in a right partition.
// 4. quicksort the left and right partitions
// 5. stick them back together.

function quicksort(array) {
	if (array.length < 3)
		return [...array].sort()
	
	let pivot = Math.floor(array.length / 2)
	let p = array[pivot]
        let left = []
	let right = []
	
	array.forEach((e, i) => {
		if (i === pivot) return
		if (e <= p) left.push(e)
		else right.push(e)
	})
	
	return [...quicksort(left), p, ...quicksort(right)]
}
