import { Projects } from "./projects";
import { addTask } from "./tasks";

function renderProjectList () {

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

function renderTaskList () {

    const projects = Projects();

    const taskDiv = document.querySelector("tasks");

    const task = addTask("Get Sprayer", "So I can paint it", "May 20", "Med", "Odds and Ends Notes");

    projects.addProjectTask("My List", task);
    console.log(projects.getProjects())
}

function modalController () {
    const dialog = document.querySelector("dialog")
    const addTaskBtn = document.querySelector(".addtask");
    const closeTaskBtn = document.querySelector("#close");
    const task = document.querySelector("#task");
    const description = document.querySelector("#description");
    const duedate = document.querySelector("#duedate");
    const priority = document.querySelector("#priority");
    const notes = document.querySelector("#notes");
    const form = document.querySelector("form")

    function openTaskModal () {
        addTaskBtn.addEventListener("click", () => {
            dialog.showModal();
        })
    };

    function closeTaskModal () {
        closeTaskBtn.addEventListener("click", () => {
             dialog.close();
         })
     };

     function submitTaskModal () {
        const projects = Projects();
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            projects.addProjectTask("My List", addTask(task.value, description.value, duedate.value, priority.value, notes.value));
            console.log(projects.getProjects())
            dialog.close();
        });
     }

     return { openTaskModal, closeTaskModal, submitTaskModal}
}

const modal = modalController();
modal.openTaskModal();
modal.closeTaskModal();
modal.submitTaskModal();

export { renderProjectList, renderTaskList }