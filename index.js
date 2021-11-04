const displayNumbersTable = function() {
    let table = document.getElementById("numbers-table")
    for (let number=1; number<=76; number++){
        let numberCharacter = document.createElement("div")
        numberCharacter.innerText = number
        numberCharacter.classList.add("numbers")
        table.appendChild(numberCharacter)
    }

}


window.onload = function () {
    displayNumbersTable();
}