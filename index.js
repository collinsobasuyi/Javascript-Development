// console.log("Hello from javascript")

// /* Data types
// underfined, null, boolean, string, symbol, number, object
//  */

// /*undefined // is something that has not be defined
// null // something with no value
// String // value
// symbols // unique
// numbers // for numbers */

// var myName = "Collins" // used through out the whole programme
// myName = 8
// let ourName = "freecodeCamp" // online be used only withing the scope where its declared
// const pi = 3.14 // variable that never and should nver chnage

// console.log(myName)
// console.log(ourName)
// console.log(pi)

// var a
// var b = 2
// console.log(a)  // will print undefined becuase we have not set anything

// a = 7
// b = a
// console.log(a) // will print 7

// // inititialize these 3 variables
// var a = 5
// var b = 10
// var c = "I am a "

// a = a + 1
// b = b + 5
// c = c + "String!"

// console.log(a)
// console.log(b)
// console.log(c)

// // Declaration
// var properCamelCase

// // Assignments
// properCamelCase = 200
// console.log(properCamelCase)

// var sum = 10 / 2
// console.log(sum)

// // increment numbers
// var myVar = 87
// myVar = myVar + 1 
// console.log(myVar)

// var myVar2 = 120
// myVar2++
// console.log(myVar2)

// // decrement numbers
// var myVar3 = 56
// myVar3--
// console.log(myVar3)

// // multiply decimal 
// var multiply = 2.0 * 2.5
// console.log(multiply)

// // divide decimal 
// var divide = 4.0 / 2.2
// console.log(divide)

// // finding remainder %
// var remainder
// remainder = 10 % 2
// console.log(remainder)

// // compound assignment with augmented addition
// var a = 3
// var b = 17
// var c = 12

// a += 12
// b += 9
// c = c + 7
// console.log(a)
// console.log(b)
// console.log(c)


// // compound assignment with augmented subtraction
// var a = 3
// var b = 17
// var c = 12

// a -= 12
// b -= 9
// c = c - 7
// console.log(a)
// console.log(b)
// console.log(c)

// // compound assignment with augmented subtraction
// var a = 3
// var b = 17
// var c = 12

// a *= 12
// b *= 9
// c = c * 7
// console.log(a)
// console.log(b)
// console.log(c)

// // compound assignment with augmented division
// var a = 3
// var b = 17
// var c = 12

// a /= 12
// b /= 9
// c = c / 7
// console.log(a)
// console.log(b)
// console.log(c)

// // declare string variables
// var firstName = "Collins"
// var lastName = "Obasuyi"

// var myFirstName = "Collins"
// var myLastName = "Obasuyi"


// // escaping literal quotes in strings
// var myStr = "I am a \"double quoted\""
// console.log(myStr)

// // Quoting strings with single quotes
// var myStr = '"I am a \"double quoted\""'
// var myStr2 = '"I am a "double quoted""'
// var myStr3 = `'"I am a "double quoted""'`
// console.log(myStr)
// console.log(myStr2)
// console.log(myStr3)

// // escape sequences in strings
// /*
// \' single quote
// \" double quote
// \\ backslash
// \n new line
// \r carriage return
// \t tab
// \b backspace
// \f form feed
// */
// var myStr4 = "FirstLine\n\t\\secondLine\nThirdLine"

// var singleQuote = "My single quote's"
// var doubleQuote = ""
// var backslash = ""
// var newLine = ""
// var carriageReturn = ""
// var tab = ""
// var backSpace = ""
// var formFeed = ""

// console.log(myStr4)

// // Concatenating strings with plus operator
// var ourStr = "I come first." + "I come second."
// var ourStr2 = "This is the start." + "This is the end."

// var ourStr3 = "I come first." 
// ourStr3 += "I come second."

// console.log(ourStr)
// console.log(ourStr2)
// console.log(ourStr3)

// // constructing strings with variables
// var dave = "freeCodeCamp "
// var ourName2 = "Hello, our name is " + dave + "How are you?" 

// var myName = "Collins"
// var myName2 = "My name is " + myName
// console.log(ourName2)
// console.log(myName2)

// // appending variables to string
// var anAdjective = "awesome!"
// var ourStr = "freedomeCamp is "
// ourStr += anAdjective

// var someAdjective = "worthwhile"
// var myStr = "Learning to code is "
// console.log(ourStr)

// //find lendth of string
// var firstNameLength = 7
// var firstName = "Collins"

// firstNameLength = firstName.length
// console.log(firstNameLength)

// // bracket notation to find character in string its called index
// var firstLetterOfFirstName = ""
// var firstName = "Collins"

// firstLetterOfFirstName = firstName[0]
// console.log(firstLetterOfFirstName)

// //string immutability, string immutable meaning they cant be altered once created
// var myStr = "Jello world"

// myStr = "Hello world"
// console.log(myStr)

// // bracket notation to find last character in string
// var firstName = "Collins"
// var lastLetterOfFirstName = firstName[firstName.length - 1]

// var lastName = "Obasuyi"
// var lastLetterOfLastName = lastName[lastName.length - 1]

// console.log(lastLetterOfFirstName)

// // bracket notation to find Nth-to-last character in string
// var firstName = "ada"
// var thirdLetterOfFirstName = firstName[firstName.length - 3] //find third letter

// var lastName = "lovelace"
// var secondLetterOfLastName = lastName[lastName.length - 2] // find second to last

// console.log(thirdLetterOfFirstName)
// console.log(secondLetterOfLastName)

// // word blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){ //function with types
// var result = ""
// result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + " " + myAdverb
// return result
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"))
// console.log(wordBlanks("bike", "slow", "flew", "slowly"))

// // store multiple values with arrays
// var ourArray = ["John", 23]
// var myArray = []

// console.log(ourArray[1])  // print 23 as second array

// // nested arrays
// var ourArray = [["John", 23], ["collins", "Obasuyi", 200]]
// console.log(ourArray[1][1][2])

// // access array data with indexes
// var ourArray = [50, 60, 70]
// var ourData = ourArray[0]

// console.log(ourData)

// // modify array data with indexes
// var ourArray = [50, 60, 70]
// var ourData = ourArray[0]

// console.log(ourData)

// // modify array data with indexes part 2
// var ourArray = [50, 60, 70]
// ourArray[1] = 45

// console.log(ourArray)

// // access multiple-dimensional arrays with indexes
// var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
// var myData = myArray[3][0][2] //1

// console.log(myData) 

// // manipulate arrar with push() adding more value adds items to the end,
// var ourArray = ["Stimpson", "J", "Cat"]
// ourArray.push(["happy", "joy"])

// console.log(ourArray)

// // manipulate arrar with pop() – extracts an item from the end,
// var ourArray = ["Stimpson", "J", "Cat"]
// ourArray.pop()

// console.log(ourArray)

// // manipulate arrar with arr.shift() – extracts an item from the beginning,
// var ourArray = ["Stimpson", "J", "Cat"]
// ourArray.shift()

// console.log(ourArray)

// // manipulate arrar with arr.unshift(...items) – adds items to the beginning.
// var ourArray = ["Stimpson", "J", "Cat"]
// ourArray.unshift("Happy", [1, 2, true, "collins"])

// console.log(ourArray)

// // shopping list
// var myList = [["cereal", 3], ["banana", 2], ["milk", 4]]

// console.log(myList)

// // write reusable code with functions, functions allow us to create reusable scripts
// function ourReusableFunction(){
//     console.log("Heyya, World")
// }

// ourReusableFunction()

// passing values to functions with arguments
function ourFunctionWithArgs(a, b){
    console.log(a - b)
}

ourFunctionWithArgs(10, 50)