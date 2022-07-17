// varibel created with let
let htmlOuput="Hello from JavaSript!"

// request tag from html with "output" class
const output = document.querySelector(".output")

// give text to tag with class "output"
output.textContent = htmlOuput

// show tag as object in console
console.dir(output)

//---------------------------------------------------

const person = {
    firstName: "Dainelly",
    lastName: "Delgado",
    age:17
}

let firstName = person.firstName
let lastName = person.lastName
let age = person.age
console.log(firstName)