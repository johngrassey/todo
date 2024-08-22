import { Projects } from "./projects";
import { addTask } from "./tasks";

const projects = Projects();

function renderProjectList () {

    const sidebar = document.querySelector(".projects");

    const projectList = projects.getProjects()

    function createProjList () {

        sidebar.textContent = "";
        for (const [key] of Object.entries(projectList)) {
            const projLI = document.createElement("li");
            projLI.textContent = key;
            sidebar.appendChild(projLI);

            projLI.addEventListener("click", () => {
                projects.setActiveProject(key);
                modal.renderTaskList()
            })
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

function taskController () {
    const dialog = document.querySelector("dialog")
    const addTaskBtn = document.querySelector(".addtask");
    const closeTaskBtn = document.querySelector("#close");
    const name = document.querySelector("#name");
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

    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            projects.addProjectTask(projects.getActiveProject(), addTask(name.value, description.value, duedate.value, priority.value, notes.value));
            dialog.close();
        });
     }

     function renderTaskList () {   
        const taskContainer = document.querySelector(".tasks");

        taskContainer.textContent = "";

        projects.getProjects()[projects.getActiveProject()].forEach((task) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const taskName = document.createElement("div");
            taskName.textContent = task.name;
            taskDiv.appendChild(taskName);

            const taskDate = document.createElement("div");
            taskDate.textContent = task.dueDate;
            taskDiv.appendChild(taskDate)

            taskContainer.appendChild(taskDiv);
        }) 
    }

     return { openTaskModal, closeTaskModal, submitTaskModal, renderTaskList }
}

const modal = taskController();
modal.openTaskModal();
modal.closeTaskModal();
modal.submitTaskModal();
//modal.renderTaskList();

export { renderProjectList, taskController }