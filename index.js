const submit = document.querySelector("#submit");
const input = document.querySelector("#newtask input");
const task = document.querySelector("#tasks");

submit.onclick = function () {
  const whitespace = /^\s*$/;
  if (input.value.length === 0 || whitespace.test(input.value)) {
    alert("Please enter a task");
  } else {
    task.innerHTML += `
            <div class="task">
                 <input type="checkbox">
                 <span id="taskname">
                     ${input.value}
                 </span>
                <button class="delete" id="delete">
                  Delete
                </button>
            </div>
        `;

    const current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
