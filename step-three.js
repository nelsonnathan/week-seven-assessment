// Longest word

let wordArr = ['hey', 'hello', 'hiya', 'indubitably']


function longestWord(array) {
    let letterCount = 0
    let longestWord = 0
    for (let i = 0; i < array.length; i++) {
        let newStr = array[i].split('')
        for (let j = 0; j < newStr.length; j++) {
            letterCount += 1
            if (letterCount > longestWord) {
                longestWord = letterCount
            letterCount = 0
            }
        }
    }
    return console.log(longestWord)
}

longestWord(wordArr)