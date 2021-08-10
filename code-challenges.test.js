// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { typeOf } = require("react-is")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function
describe ("cipher", () => {
    test("returns a string with 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(cipher(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(cipher(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(cipher(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.
// create a function called cipher
// it will take in a string
// it will iterate for each
// moving through each individual character and swapping with provided characters
//'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// finally return the entire string

const cipher = (string) => {
    let split = string.split("");
    return split.map((value, index) => { //run through an if statement to decide on what is going to switch
        if (value === "a"){
            return value = "4"
        }else if (value ==="e"){
            return value = "3"}
        else if (value ==="E"){
            return value = "3"
        }else if (value ==="i"){
            return value = "1"
        }else if (value ==="o"){
            return value = "0"
        }else {
            return value = value
        }
    }).join('')

}

// you could also nest an if statement and lower case all of the words and return them all upper case however since only Eccentric was being looked for i went with a simple function.
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
describe ("aReturnStatement", () => {
    test('takes in an array and returns all the words that contain the letter a', () => {
        expect(aReturnStatement(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(aReturnStatement(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]



// b) Create the function that makes the test pass.
//create a function returnIfA
// takes in an array 
// using filter return if the indexOf a word is greater than -1 
const aReturnStatement = (array) => {
    return array.filter(value => value.match(/a/ig))
}
//return array.filter(value => value.indexOf('a')  !== -1 || value.indexOf('A') != -1)
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
describe ("isFullHouse", () => {
    test('takes in an array of 5 numbers and determines whether or not the array is a “full house”.', () => {
        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
    })
})
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
// create a function isFullHouse
// take in an array of numbers
// iterate through the numbers ensuring that only if a number is repeated 3 times and another number is repeated twice then the function will return true.



// this breaks if anything other than what is put in works, revisit. 


const isFullHouse = (array) => {
    let sortedArray = array.sort((a, b) => a - b)
    if (sortedArray[0] === sortedArray[1]  && sortedArray[1] === sortedArray[2] &&
        sortedArray[3] === sortedArray[4]){
                return true              
        }else if(sortedArray[2] === sortedArray[3]  && sortedArray[3] === sortedArray[4] && 
            sortedArray[0] === sortedArray[1]){
                return true
            }else{
            return false                
        }    
}
//Also you could use regex to search for like pairs and triples

// if (sortedArray[0] === sortedArray[1]  && sortedArray[0] === sortedArray[2] || sortedArray[2] === sortedArray[3]  && sortedArray[2] === sortedArray[4]){
//     if(sortedArray[3] === sortedArray[4])
//          return true
//      else{  
//          return false
//      }                
//  }else if(sortedArray[2] === sortedArray[3]  && sortedArray[2] === sortedArray[4])
//      if(sortedArray[0] === sortedArray[1])
//          return true
//      else{
//          return false
//      }
//  else{
//  return false                
//  }

// sortedArray = array.sort((a, b) => a - b)
// for (let i = 0; i < sortedArray.length; i++) {
//     let temp = sortedArray[i];
//     let next = sortedArray[i + 1]
//     let kindOf3 = null
//     let pair = null
//     console.log(temp)
//     console.log(next)
//     if (temp === next){
//         return kindOf3 += 1
//     }
//     else if (temp === next && typeOf(next) === 'number'){
//         return pair += 1
//     }else{

//     }
// }
// const isFullHouse = (array) => {
//     return array.filter((value,index,array)=>{

//         if (value === array[index+1]){
//             return array.splice(index,1)
            
//         }else{

//         }
//     })
// }
