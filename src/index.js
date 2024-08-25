import "./styles.css";
import { renderProjectList, taskController } from "./render";

if (!localStorage.getItem("projectList")) {
    populateStorage();
  } else {
    renderProjectList();
  }

  function populateStorage() {
    localStorage.setItem('projectList', '{"My List" : []}')
    localStorage.setItem('activeProject', "My List")
    renderProjectList();
  }


const test = taskController();
test.renderTaskList()