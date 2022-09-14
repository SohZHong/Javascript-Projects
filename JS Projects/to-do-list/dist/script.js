const to_do = document.getElementById("TDL");
const alert = document.getElementById("alerting");
const addtask = document.getElementById("addtask");
const submitBtn = document.getElementById("submit");
const tasklist = document.getElementById("list");
const clear = document.getElementById("clear");
const container = document.querySelector(".second-container");
const main_container = document.querySelector(".task-container");

let editElement;
let editFlag = false;

to_do.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const value = addtask.value;
  //to ensure not in edit mode or no value
  if (value && !editFlag) {
    const article = document.createElement("article");
    article.className = "task-list";
    article.id = "list";
    const p = document.createElement("p");
    p.className = "tasks";
    var input = document.createTextNode(value);
    p.appendChild(input);
    const div = document.createElement("div");
    div.className = "button-container";
    div.innerHTML =
      '<span class="edit-button">Edit</span><span class="delete-button">&#215;</span>';
    article.appendChild(p);
    article.appendChild(div);
    container.appendChild(article);
    const editBtn = document.querySelectorAll(".edit-button");
    const deleteBtn = document.querySelectorAll(".delete-button");
      for (let i = 0; i < editBtn.length; i++){
        editBtn[i].addEventListener("click", editItem);
        deleteBtn[i].addEventListener("click", deleteItem);
      }
    main_container.classList.add("show-container");
    //Notice when task added
    DisplayAlert("Task added successfully", "success");
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = value;
    setBackToDefault();
    DisplayAlert("Task edited", "success");
  } else {
    DisplayAlert("No input entered", "danger");
  }
}

function editItem(e){
  editElement = e.currentTarget.parentElement.previousElementSibling;
  addtask.value = editElement.textContent;
  editFlag = true;
  submitBtn.textContent = "Edit";
}
 
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  container.removeChild(element);
  DisplayAlert("Task deleted", "danger");
  setBackToDefault();
};

function clearItems(){
  const tasks = document.querySelectorAll("#list");
  if (tasks.length > 0) {
    tasks.forEach(function (tasks) {
      container.removeChild(tasks);
      if (container.childNodes.length === 0) {
        main_container.classList.remove("show-container");
      }
    });
  }
  DisplayAlert("List emptied", "success");
  setBackToDefault();
};
clear.addEventListener("click", clearItems);

//display alert
function DisplayAlert(text, action) {
  alert.textContent = text;
  if (action == "danger") {
    alert.classList.add("alert-danger");
    alert.classList.remove("alert-success");
  } else if (action == "success") {
    alert.classList.add("alert-success");
    alert.classList.remove("alert-danger");
  }
  //remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove("alert-danger");
    alert.classList.remove("alert-success");
  }, 5000);
}

function setBackToDefault() {
  addtask.value = "";
  editFlag = false;
  submitBtn.textContent = "Submit";
}