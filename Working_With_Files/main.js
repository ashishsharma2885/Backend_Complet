
const fs = require("fs")

//console.log(fs)

console.log("starting")
// fs.writeFileSync("Ashish.txt", "Ashish is good boy")

fs.writeFile("Ashish2.txt", "Ashish is a good boy", ()=> {
    console.log("done")
    fs.readFile("Ashish3.txt", (error, data) => {
        console.log(error, data.toString())
    })
})
console.log("ending")