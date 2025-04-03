const form = document.querySelector("form")
const inputTask = document.querySelector("#inputTask")
const submit = document.querySelector("#submit")

const dashboard = document.querySelector("#dashboard")


form.addEventListener("submit", (event) => {
  event.preventDefault()

  addItem(inputTask.value)
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