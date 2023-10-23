let count = 0
let countEl = document.getElementById("count-el")

function increment() {
  count += 1
  countEl.textContent = count
}

let countSave = document.getElementById("count-save")

function save() {
  if (countSave.textContent !== "") {
    countSave.textContent += " - ";
  }
  countSave.textContent += count;
  count = 0;
  countEl.textContent = count;
}
