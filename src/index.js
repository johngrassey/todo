import "./styles.css";
import { renderProjectList, renderTaskList } from "./render";

if (!localStorage.getItem("projectList")) {
    populateStorage();
  } else {
    renderProjectList();
    renderTaskList();
  }

  function populateStorage() {
    localStorage.setItem('projectList', '{"My List" : []}')
    localStorage.setItem('activeProject', "My List")
    renderProjectList();
    renderTaskList()
  }

