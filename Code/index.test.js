#!/bin/node
const results = require("./index")

// TESTS
const uiUsableData_result = [
  {
    fullName: "John Doe",
    birthYear: 1991,
    interests: "drums, programming, video games, hiking",
  },
  {
    fullName: "Jane Doe",
    birthYear: 1990,
    interests: "reading, running, walking",
  },
  {
    fullName: "Jim Doe",
    birthYear: 2005,
    interests: "cooking, walking, video games",
  },
]

const thirtyAndBelow_result = [
  {
    firstName: "John",
    lastName: "Doe",
    birthDay: "09/15/1991",
    interests: ["drums", "programming", "video games", "hiking"],
  },
  {
    firstName: "Jim",
    lastName: "Doe",
    birthDay: "06/02/2005",
    interests: ["cooking", "walking", "video games"],
  },
]

const interests_result = [
  "drums",
  "programming",
  "video games",
  "hiking",
  "reading",
  "running",
  "walking",
  "cooking",
]

function logGreen(msg) {
  console.log("\x1b[32m" + msg + "\x1b[32m")
}

function logRed(msg) {
  console.log("\x1b[31m" + msg + "\x1b[31m")
}

// UI Usable Data Test
if (
  JSON.stringify(results.uiUsableData) === JSON.stringify(uiUsableData_result)
) {
  logGreen("UI Usable Data Test: Passed!")
} else {
  logRed("UI Usable Data Test: Failed!")
}

// Thirty and Below Test
if (
  JSON.stringify(results.thirtyAndBelow) ===
  JSON.stringify(thirtyAndBelow_result)
) {
  logGreen("Thirty and Below Test: Passed!")
} else {
  logRed("Thirty and Below Test: Failed!")
}

// Interests Test
if (JSON.stringify(results.interests) === JSON.stringify(interests_result)) {
  logGreen("Interests Test: Passed!")
} else {
  logRed("Interests Test: Failed!")
}
