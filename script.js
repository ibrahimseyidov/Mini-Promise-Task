const myInput = document.querySelector("#myInput");
const addBtn = document.querySelector("#addBtn");
const mainContain = document.querySelector(".main-container")
const container = document.querySelector(".container")

addBtn.addEventListener("click", () => {
    showValueUI()
        .then((value) => {
            addValueUI(value)
            myInput.value = ""
        })
        .catch((error) => showError(error))
})


function addValueUI(currentValue) {

    let newEl = document.createElement("div");
    newEl.classList.add("list-container");
    newEl.innerHTML = `<ul>
        <li>${currentValue}</li>
      </ul>`
    mainContain.appendChild(newEl)
}

function showError(error) {

    let el = document.createElement("div")
    el.className = "alert alert-danger"
    el.innerHTML = `${error}`
    container.appendChild(el)
    setTimeout(() => {
        container.removeChild(el)
    },2500)

}

function showValueUI() {

    return new Promise((resolve, reject) => {
        let myValue = myInput.value.trim();
        if (myValue) {
            resolve(myValue)
            return
        }
        reject("Girdiyiniz dəyər yanlışdır...")
    })

}