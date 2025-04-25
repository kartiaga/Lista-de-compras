const form = document.querySelector("form")
const inputTask = document.querySelector("#inputTask")
const submit = document.querySelector("#submit")

const dashboard = document.querySelector("#dashboard")

let items = JSON.parse(localStorage.getItem("tasks")) || []

for (let i = 0; i < items.length; i++) {
  renderItem(items[i].name, items[i].id); // só desenha
}

function renderItem(name, id) {
  const newTask = document.createElement("li")
  newTask.classList.add("task")
  newTask.dataset.id = id

  const innerInput = document.createElement("input")
  const innerCheckbox = document.createElement("div")
  const innerSpan = document.createElement("span")
  const innerTrash = document.createElement("div")

  innerInput.setAttribute("type", "checkbox")
  innerCheckbox.classList.add("checkbox")
  innerSpan.textContent = name
  innerTrash.classList.add("trash")

  newTask.append(innerInput, innerCheckbox, innerSpan, innerTrash)

  dashboard.appendChild(newTask)
}


function addTaskLocal(task, id) {
  const newTask = {
    id: id,
    name: task,
  }

  items.push(newTask)
  localStorage.setItem("tasks", JSON.stringify(items))
}


form.addEventListener("submit", (event) => {
  event.preventDefault()

  addItem(inputTask.value)
  // Apaga o que tem no input após adicionar
  inputTask.value = ""
})

//adiciona uma div.task no dashboard
function addItem(taskName) {
  const novoId = items.length > 0 ? items[items.length - 1].id + 1 : 1
  if (taskName.trim() === "") return
  renderItem(taskName, novoId)     // desenha
  addTaskLocal(taskName, novoId)   // salva
}


const alertLabel = document.querySelector(".alert")
// Se clicar em um lugar que tem uma classe lixeira, remove o pai
dashboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash")) {
    const tarefaElement = event.target.parentElement
    const idTarefa = parseInt(tarefaElement.dataset.id)

    // Remove do DOM
    tarefaElement.remove()

    // Remove do array pelo id
    items = items.filter(item => item.id !== idTarefa)

    // Atualiza o localStorage
    localStorage.setItem("tasks", JSON.stringify(items))

    alertLabel.classList.remove("hide")
  }
})


const alertDelete = document.querySelector(".delete")

alertDelete.addEventListener("click", () => {
  alertLabel.classList.add("hide")
})