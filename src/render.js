import { Projects } from "./projects";

function renderSidebar () {

    const projects = Projects();

    const sidebar = document.querySelector(".projects");

    const projectList = projects.getProjects()

    function createProjList () {
        sidebar.textContent = "";
        for (const [key] of Object.entries(projectList)) {
            const projLI = document.createElement("li");
            projLI.textContent = key;
            sidebar.appendChild(projLI);
        }
    }

    function addProjectBtn () {
        const addProjBtn = document.querySelector(".addproject")
    
        addProjBtn.addEventListener("click", () => {
            projects.addProject(prompt("Next Project"))
            createProjList();
        })
    }

    createProjList();
    addProjectBtn();
}

export { renderSidebar }