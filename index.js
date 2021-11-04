const displayNumbersTable = function() {
    let table = document.getElementById("numbers-table")
    for (let i=1; i<=76; i++){
        let numberCharacter = document.createElement("div")
        numberCharacter.innerText = i
        numberCharacter.classList.add("numbers")
        table.appendChild(numberCharacter)
    }
}

const randomizeNumber = function () {
    let randomNum = Math.floor(Math.random() * 76)
    console.log(randomNum)
    let numbersTable = document.querySelectorAll(".numbers")
    console.log(numbersTable)
    for (let i=0; i<numbersTable.length; i++){
        if (numbersTable[i].innerText == randomNum) {
            numbersTable[i].classList.toggle("highlightedNumber")
        }
    }
}

window.onload = function () {
    displayNumbersTable();
}