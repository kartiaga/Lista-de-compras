const form = document.querySelector("form")
const inputTask = document.querySelector("#inputTask")
const submit = document.querySelector("#submit")

const dashboard = document.querySelector("#dashboard")


form.addEventListener("submit", (event) => {
  event.preventDefault()

  addItem(inputTask.value)
  // Apaga o que tem no input após adicionar
  inputTask.value = ""
})

//adiciona uma div.task no dashboard
function addItem(props) {
  const newTask = document.createElement("li")

  const innerInput = document.createElement("input")
  const innerCheckbox = document.createElement("div")
  const innerSpan = document.createElement("span")
  const innerTrash = document.createElement("div")

  newTask.classList.add("task")
  innerInput.setAttribute("type", "checkbox")
  innerCheckbox.classList.add("checkbox")
  innerSpan.textContent = props
  innerTrash.classList.add("trash")

  newTask.append(innerInput, innerCheckbox, innerSpan, innerTrash)

  dashboard.appendChild(newTask)
}

// Se clicar em um lugar que tem uma classe lixeira, remove o pai
dashboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash")) {
    event.target.parentElement.remove()
  }
})