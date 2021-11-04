const displayNumbersTable = function() {
    let table = document.getElementById("numbers-table")
    for (let number=1; number<=76; number++){
        let numberCharacter = document.createElement("div")
        numberCharacter.innerText = number
        numberCharacter.classList.add("numbers")
        table.appendChild(numberCharacter)
    }
}

const randomizeNumber = function () {
    let randomNum = Math.floor(Math.random() * 76)
    let numbersTable = document.getElementsByClassName("numbersTable")
    for (let i=0; i<numbersTable.length; i++){
        if (numbersTable[i] === randomNum) {
            numbersTable[i].classList.add("highlightedNumber")
        }
    }
    console.log(randomNum)
}

window.onload = function () {
    displayNumbersTable();
}