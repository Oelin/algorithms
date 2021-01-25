// C-friendly selection sort

function selection_sort(array) {
    let i = 0
    while (i < array.length) {
        // find minimum element
        let min
        let mindex

        for (let j=i; j < array.length; j++) {
          if (min == undefined || array[j] <= min) {
            mindex = j
            min = array[j]
          }
        }

        array[mindex] = array[i]
        array[i] = min
        i++
    }
    return array
}
