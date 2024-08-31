import "./styles.css";
import { renderProjectList, renderTaskList, renderModal } from "./render";
import { Projects } from "./projects";
import { addTask } from "./tasks";
import { parse, format } from "date-fns";

if (!localStorage.getItem("projectList")) {
  populateStorage();
} else {
  runApp();
}

function populateStorage() {
  localStorage.setItem("projectList", '{"My List" : []}');
  localStorage.setItem("activeProject", "My List");
  runApp();
}

function submitBtn(event) {
  const projects = Projects();
  const name = document.querySelector("#name");
  const description = document.querySelector("#description");
  const duedate = document.querySelector("#duedate");
  const priority = document.querySelector('input[name="priority"]:checked');
  const notes = document.querySelector("#notes");
  const modal = renderModal();

  event.preventDefault();
  if (event.submitter.className === "updatetask") {
    projects.updateTask(
      projects.getActiveProject(),
      event.submitter.getAttribute("id").substring(1),
      name.value,
      notes.value,
      parse(duedate.value, "yyyy-MM-dd", new Date()),
      priority.value,
      description.value,
    );
  } else {
    projects.addProjectTask(
      projects.getActiveProject(),
      addTask(
        name.value,
        description.value,
        parse(duedate.value, "yyyy-MM-dd", new Date()),
        priority.value,
        notes.value,
      ),
    );
  }
  modal.closeModal();
  renderTaskList();
}

function runApp() {
  const addTaskBtn = document.querySelector(".addtask");
  const modal = renderModal();

  const form = document.querySelector("form.modal");

  addTaskBtn.addEventListener("click", () => {
    modal.clearModal();
    modal.addSubmitButton("submittask", "Add Task");
    modal.openModal();
  });

  form.addEventListener("submit", submitBtn);

  const render = renderProjectList();

  render.createProjList();
  render.addProjectBtn();
}
