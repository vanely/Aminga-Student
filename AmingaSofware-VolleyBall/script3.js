const firstName = document.querySelector(".First-Name")
const lastName = document.querySelector(".Last-Name")
const age = document.querySelector(".Age")
const button = document.querySelector(".button")

const data = {}

button.addEventListener("click", function() {
    data.firstName = firstName.value
    data.lastName = lastName.value
    data. Age = Age.value

    console.log(data)
})


