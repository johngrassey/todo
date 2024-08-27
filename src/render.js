import { Projects } from "./projects";
import { addTask } from "./tasks";
import trashImg from "./trash-can.svg"
import {parse, format} from "date-fns"

const projects = Projects();

function renderProjectList () {

    const sidebar = document.querySelector(".projects");
    const projDialog = document.querySelector("dialog.project")

    const projectList = projects.getProjects();

    
    function updateActiveProj (key) {
        projects.setActiveProject(key);
        createProjList();
    }

    function createProjList () {

        sidebar.textContent = "";
        for (const [key] of Object.entries(projectList)) {
            const projLI = document.createElement("li");
            projLI.textContent = key;

            if (key === projects.getActiveProject()) {
                projLI.style.color = "blue";
            }

            sidebar.appendChild(projLI);

            projLI.addEventListener("click", () => {
                updateActiveProj(key);
                modal.renderTaskList();
            })
        }
    }

    function addProjectBtn () {
        const addProjBtn = document.querySelector(".addproject")
    
        addProjBtn.addEventListener("click", () => {
            const newProj = prompt("Next Project");
            projects.addProject(newProj);
            projects.setActiveProject(newProj);
            createProjList();
        })
    }

    createProjList();
    addProjectBtn();
}

function renderModal () {
    const dialog = document.querySelector("dialog");
    const form = document.querySelector("form");
    const closeTaskBtn = document.querySelector("#close");

    function clearModal () {
        form.reset();

        const submit = document.querySelector("form > button");
        console.log(submit)
        form.removeChild(submit);
    }

    function closeModal () {
        dialog.close();
    }

    function openModal () {
        closeTaskBtn.addEventListener("click", () => {
            closeModal();
        })

        dialog.showModal();
    }

    function addSubmitButton (domClass, text) {
        const submit = document.createElement("button")
        submit.classList.add(domClass)
        submit.textContent = text;
        form.appendChild(submit)
    }

return { clearModal, closeModal, addSubmitButton, openModal}

}

function taskController () {
    //const dialog = document.querySelector("dialog")
    const addTaskBtn = document.querySelector(".addtask");
    const closeTaskBtn = document.querySelector("#close");
    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const duedate = document.querySelector("#duedate");
    const priority = document.querySelector("#priority");
    const notes = document.querySelector("#notes");
    const form = document.querySelector("form");

    const modal = renderModal();

    // function clearModal () {
    //     form.reset();

    //     const submit = document.querySelector("form > button");
    //     console.log(submit)
    //     form.removeChild(submit);
    // }

    // function closeTaskModal () {
    //     dialog.close();
    // }

    // function addSubmitButton (domClass, text) {
    //     const submit = document.createElement("button")
    //     submit.classList.add(domClass)
    //     submit.textContent = text;
    //     form.appendChild(submit)
    // }

    function openTaskModal () {
        addTaskBtn.addEventListener("click", () => {
            modal.clearModal();
            modal.addSubmitButton("submitTask", "Add Task");
            modal.openModal();
            // clearModal();
            // addSubmitButton("submitTask", "Add Task");
            // dialog.showModal();
        })
    };

    // closeTaskBtn.addEventListener("click", () => {
    //     closeTaskModal();
    // })

     function submitTaskModal () {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (event.submitter.className === "updatetask") {
                console.log(event);
                projects.updateTask(projects.getActiveProject(), name.value, name.value, notes.value, parse(duedate.value, "yyyy-MM-dd", new Date()), priority.value, description.value);
            } else {
                projects.addProjectTask(projects.getActiveProject(), addTask(name.value, description.value, parse(duedate.value, "yyyy-MM-dd", new Date()), priority.value, notes.value));
            }
            modal.closeModal()
            renderTaskList();
        });
     }

     function deleteTask (taskName) {
        projects.delProjectTask(projects.getActiveProject(), taskName)
        renderTaskList();
     }

     function renderTaskList () {   
        const taskContainer = document.querySelector(".tasks");

        taskContainer.textContent = "";

        projects.getProjects()[projects.getActiveProject()].forEach((task) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");



            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            if (task.done) {
                taskName.classList.add("done");
                checkbox.checked = true;
            }
            taskDiv.appendChild(checkbox)

            checkbox.addEventListener("click", () => {
                projects.completeTask(projects.getActiveProject(), task.name)
                if (task.done) {
                    taskName.classList.add("done");
                } else {
                    taskName.classList.remove("done");
                }
            })

            const taskName = document.createElement("div");
            taskName.textContent = task.name;
            taskDiv.appendChild(taskName);

            const taskDate = document.createElement("div");
            taskDate.textContent = format(task.dueDate, "MMM d, yyyy");
            taskDiv.appendChild(taskDate)

            const trash = document.createElement("img");
            trash.src = trashImg;
            trash.classList.add("trash");
            taskDiv.appendChild(trash);

            trash.addEventListener("click", () => {
                deleteTask(task.name)
            })

            taskName.addEventListener("click", () => {
                clearModal();
                name.setAttribute("value", task.name);
                description.setAttribute("value", task.description);
                duedate.setAttribute("value", format(task.dueDate, "yyyy-MM-dd"));
                priority.setAttribute("value", task.priority);
                notes.setAttribute("value", task.notes);
                addSubmitButton("updateTask", "Update Task")
                dialog.showModal();
            })

            taskContainer.appendChild(taskDiv)
        }) 
    }

     return { openTaskModal, submitTaskModal, renderTaskList }
}

const modal = taskController();
modal.openTaskModal();
modal.submitTaskModal();

export { renderProjectList, taskController }