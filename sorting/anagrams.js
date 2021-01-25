// Given list of words, write an algorithm to efficiently group those which are anagrams of
// eachother.


// the sort function is not very important

function sort(string) {
  return string.split('').sort().join('')
}


function anagrams(words) {
    let hash = {} // hashtable
    
    for (let word of words) {
      let sorted = sort(word)
      hash[sorted] = [...(hash[sorted] || []), word]
    }
    
    return Object.values(hash)
}
