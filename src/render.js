import { Projects } from "./projects";
import trashImg from "./trash-can.svg"
import {parse, format} from "date-fns"



function renderProjectList () {
    const projects = Projects();
    const sidebar = document.querySelector(".projects");

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
                projLI.classList.add("activeproject");
            }

            sidebar.appendChild(projLI);

            projLI.addEventListener("click", () => {
                updateActiveProj(key);
                renderTaskList();
            })
        }
    }

    function addProjectBtn () {
        const addProjForm = document.querySelector("form.newproject")
        const newProject = document.querySelector("input#project")
    
        addProjForm.addEventListener("submit", () => {
            console.log(newProject.value);
            if (newProject.value === "") {
                return
            } else {
            projects.addProject(newProject.value);
            projects.setActiveProject(newProject.value);
            }
        })
    }

    // createProjList();
    // addProjectBtn();

    return { createProjList, addProjectBtn }
}

function renderModal () {
    const dialog = document.querySelector("dialog");
    const form = document.querySelector("form.modal");
    const closeTaskBtn = document.querySelector("#close");

    function clearModal () {
        form.reset();
        const submit = document.querySelector("form > button");
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

    function addSubmitButton (domClass, text, index) {
        const modalHeader = document.querySelector("h3");
        modalHeader.textContent = text;
        const submit = document.createElement("button")
        submit.classList.add(domClass),
        submit.setAttribute("id", "b" + index)
        submit.textContent = text;
        form.appendChild(submit);
    }

return { clearModal, closeModal, addSubmitButton, openModal }

}

function renderTaskList () {   
    const projects = Projects();
    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const duedate = document.querySelector("#duedate");
    const priority = document.querySelectorAll('input[name="priority"]');
    const notes = document.querySelector("#notes");
    const taskContainer = document.querySelector(".tasks");
    const modal = renderModal();

    taskContainer.textContent = "";

    projects.getProjects()[projects.getActiveProject()].forEach((task, i) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.setAttribute("id", "t" + i)

        const taskContent = document.createElement("div");
        taskContent.classList.add("taskcontent");

        // CHECKBOX
        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("type", "checkbox");
        if (task.done) {
            taskName.classList.add("done");
            checkbox.checked = true;
        }

        taskDiv.appendChild(checkbox);

        checkbox.addEventListener("click", () => {
            projects.completeTask(projects.getActiveProject(), task.name)
            if (task.done) {
                taskName.classList.add("done");
                taskDate.classList.add("done");
            } else {
                taskName.classList.remove("done");
                taskDate.classList.remove("done");
            }
        })

        // TASK NAME
        const taskName = document.createElement("div");
        taskName.textContent = task.name;
        taskName.classList.add("taskname");
        taskContent.appendChild(taskName);

        taskName.addEventListener("click", () => {

            modal.clearModal();

            name.setAttribute("value", task.name);
            description.setAttribute("value", task.description);
            duedate.setAttribute("value", format(task.dueDate, "yyyy-MM-dd"));
            //priority.setAttribute("value", task.priority);
            for (const nodes of priority) {
                if (nodes.value === task.priority) {
                    nodes.checked = true;
                    break;
                }
            }
            notes.setAttribute("value", task.notes);

            modal.addSubmitButton("updatetask", "Update Task", i);
            modal.openModal();
        })

        // DUE DATE
        const taskDate = document.createElement("div");
        taskDate.textContent = format(task.dueDate, "MMM d, yyyy");
        taskContent.appendChild(taskDate)

    
        // TRASH
        const trash = document.createElement("img");
        trash.src = trashImg;
        trash.classList.add("trash");

        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(trash);

        trash.addEventListener("click", () => {
            projects.delProjectTask(projects.getActiveProject(), i)
            renderTaskList();
        })


        taskContainer.appendChild(taskDiv);
    }) 
}

export { renderProjectList, renderTaskList, renderModal }