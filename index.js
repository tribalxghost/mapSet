// What does the following code return?
// new Set([1,1,2,2,3,4])
// {1,2,3,4}


// What does the following code return?
// [...new Set("referee")].join("")

// { ref }


// What does the Map m look like after running the following code ?
//  let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);
// { [1, 2, 3], false }


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate



function hasDuplicate(arr){
return arr.length === new Set(arr).size ? false:true
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str){
    let vowels = 'aeiou'
    let vowelMap = new Map()
    for(vowel of str){
        if(vowels.includes(vowel.toLowerCase())){
            if(vowelMap.has(vowel)){
                vowelMap.set(vowel, vowelMap.get(vowel.toLowerCase()) + 1)
            } else {
                vowelMap.set(vowel.toLowerCase(), 1)
            }
        }
    }
return vowelMap

}
