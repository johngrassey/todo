import { Projects } from "./projects";

function renderProjects () {

    const projects = Projects();

    projects.addProject("Groceries");
    projects.addProject("Shop Projects");

    const sidebar = document.querySelector("#sidebar");

    const projectList = projects.getProjects()

    for (const [key] of Object.entries(projectList)) {
        const projLI = document.createElement("li");
        projLI.textContent = key;
        sidebar.appendChild(projLI);
    }

}

export { renderProjects }