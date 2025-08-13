document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);

      taskInput.value = "";
    }
  });
});
