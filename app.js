console.log("Hello World!\n==========\n");
// Exercise 1 Section: The Sum of an Array
console.log("EXERCISE 1:\n==========\n");
function arraySum (numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum = number + sum
    });
    return sum
}
const numbers = [2, 22, 12, 17, 18, 39, 129]
console.log(arraySum(numbers))

// Exercise 2 Section: Favorite Book
console.log("EXERCISE 2:\n==========\n");
let book = {}
book.title = "Gracling"
book.pages = 471
book.readCount = 7
book.author = "Kristin Cashore"
book.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`
}
console.log(book)

// Exercise 3 Section: Reverse a String
console.log("EXERCISE 3:\n==========\n")
let sentence = "The quick brown fox jumps over the lazy dog";
function wordReverse(phrase) {
    let result = []
    let wordsArray = sentence.split(' ')
    for(let n in wordsArray) {
        let word = wordsArray[n].split("")
        word.reverse()
        let reversedWord = word.join("")
        result.push(reversedWord)
    }
    return result.join(" ")
}
console.log(wordReverse(sentence))

// Exercise 4 Section: Parse a CSV
console.log("EXERCISE 4: \n==========\n")
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
function parseCSV(data){
    let result = []
    let headers = data.slice(0, data.indexOf(`\n`)).split(",")
    let allValues = data.slice(data.indexOf(`\n`)+ 1).split(`\n`)
    result = allValues.map((row) => {
        let values = row.split(",")
        let obj = {}
        values.forEach((col, idx) => {
            obj[headers[idx]] = col
        })
        return obj
    })
    return result
}

console.log(parseCSV(csvData))