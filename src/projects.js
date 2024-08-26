function Projects () {
    //const projectList = {"My List" : []};
    const projectList = JSON.parse(localStorage.getItem("projectList"));

    let activeProject = localStorage.getItem("activeProject");

    function storeData () {
        localStorage.setItem("projectList", JSON.stringify(projectList));
    }

    const addProject = (project) => {
        projectList[project] = [];
        storeData();
    }

    const setActiveProject = (project) => {
        activeProject = project;
        localStorage.setItem("activeProject", activeProject)
    }

    const addProjectTask = (project, task) => {
        projectList[project].push(task);
        storeData();
    }

    const completeTask = (project, task) => {
        for (let i = 0; i < projectList[project].length; i++) {
            if (projectList[project][i].name === task) {
                projectList[project][i].done = !projectList[project][i].done;
                storeData();
                break;
            }
        }
    }

    const updateTask = (project, task, name, notes, duedate, priority, description) => {
        for (let i = 0; i < projectList[project].length; i++) {
            if (projectList[project][i].name === task) {
                projectList[project][i].name = name;
                projectList[project][i].notes = notes;
                projectList[project][i].dueDate = duedate;
                projectList[project][i].priority = priority;
                projectList[project][i].description = description;
                storeData();
                break;
            }
        }
    };

    const delProjectTask = (project, task) => {

        for (let i = 0; i < projectList[project].length; i++) {
            if (projectList[project][i].name === task) {
                projectList[project].splice(i, 1);
                storeData();
                break;
            }
        }
    }

    const delProject = (project) => {
        delete projectList[project];
    }

    const getProjects = () => { return projectList }

    const getActiveProject = () => { return activeProject }

    return { addProject, addProjectTask, delProjectTask, delProject, getProjects, getActiveProject, setActiveProject, completeTask, updateTask };

};

export { Projects }