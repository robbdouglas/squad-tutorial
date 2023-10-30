const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // Erstellen eines neuen Listenelements
    const taskItem = document.createElement("li");

    // Erstellen von Checkbox und Löschen-Button
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Löschen";

    // Hinzufügen der Aufgabe und den Buttons zum Listenelement
    taskItem.innerText = taskText;
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteButton);

    // Eventlistener für das Löschen der Aufgabe
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    // Eventlistener für das Erledigen der Aufgabe
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        taskItem.style.textDecoration = "line-through";
      } else {
        taskItem.style.textDecoration = "none";
      }
    });

    // Hinzufügen des Listenelements zur Aufgabenliste
    taskList.appendChild(taskItem);

    // Leeren des Eingabefelds
    taskInput.value = "";
  }
});
