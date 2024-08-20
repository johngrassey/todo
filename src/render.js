import { Projects } from "./projects";

function renderProjects () {

    const projects = Projects();

    projects.addProject("Groceries");

    const sidebar = document.querySelector("#sidebar");

    const projectList = projects.getProjects()

    projectList.forEach(element => {
        console.log(Object.entries(element).toString());
        const projLI = document.createElement("li");
        projLI.textContent = Object.entries(element);
        sidebar.appendChild(projLI);
    });

}

export { renderProjects }