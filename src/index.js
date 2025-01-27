 // As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

// tasklister Lab Assignment

document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("form");
const tasks = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.task.value;
  addElement(inputValue)
})

function addElement(element){
  let listTask = document.createElement("li");
  let button = document.createElement("button");
  listTask.textContent = ` ${element} `
  button.textContent = "x"
  button.addEventListener("click", e => deleteButton(e))
  listTask.appendChild(button)
  tasks.appendChild(listTask)

}

function deleteButton(event){
  console.log(event);
  event.target.parentNode.remove();
}

});
