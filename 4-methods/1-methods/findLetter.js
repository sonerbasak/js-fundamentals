
let text = "Hello everyone, I love Hakgul, so much"

let letter = prompt("Which letter do you want to find?")

function findLetterCount(letter) {
  count = 0
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).toLowerCase() === letter.toLowerCase()) {
      count++
    }
  }
  return count
}

letterCount = findLetterCount(letter)

console.warn(`The letter "${letter}" appears ${letterCount} times in the text.`)