#!/bin/node
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    birthDay: "09/15/1991",
    interests: ["drums", "programming", "video games", "hiking"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDay: "12/01/1990",
    interests: ["reading", "running", "walking"],
  },
  {
    firstName: "Jim",
    lastName: "Doe",
    birthDay: "06/02/2005",
    interests: ["cooking", "walking", "video games"],
  },
]

// Array.map()
/**
 * Challange One: Restructure the above array using Array.map(). Restructure the data to look like this:
 * {
 *  fullName: string, // Combine the first and last name with a space between and capitalize the first letter of each name.
 *  birthYear: number, // Get the birthYear of the person and convert it to a number value
 *  interests: string // Create a comma separated list of all the persons intersts. Don't worry about adding 'and' for the last one. This should be a string value
 * }
 * Extra Credit: Complete with 7 lines or less inside of the map callback block
 */
const uiUsableData = data.map(value => {
  return {
    fullName: value.firstName + " " + value.lastName,
    birthYear: Number(value.birthDay.split("/")[2]),
    interests: value.interests.join(", "),
  }
})
console.log(uiUsableData)
// Array.filter()
/**
 * Challange Two: Filter the data using Array.filter() so that only the people who are age 30 and below appear in the new array.
 * Extra Credit: Complete with 5 lines or less inside of the filter callback block
 */
const thirtyAndBelow = data.filter(age => {
  const ageSeconds = new Date().getTime() - new Date(age.birthDay).getTime()

  return ageSeconds < 31 * 365 * 86400 * 1000

})
console.log(thirtyAndBelow)

// Array.reduce()
/**
 * Challange Three: Use Array.reduce() to get a new array of a unique list of all the peoples interests. No duplicates.
 * Extra Credit: Complete in 10 lines or less inside of the reduce callback block
Documentation 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
//currArr is the current Value, arrVal is the new Value

const interests = data.reduce((currArr, arrVal) => {
  if (currArr.indexOf(arrVal) === -1) {
    currArr.push(arrVal)
  }
  return currArr
}, [])
console.log(interests)

module.exports = {
  uiUsableData,
  thirtyAndBelow,
  interests,
}
