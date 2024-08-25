function Projects () {
    //const projectList = {"My List" : []};
    console.log(JSON.parse(localStorage.getItem("projectList")))
    const projectList = JSON.parse(localStorage.getItem("projectList"));

    let activeProject = localStorage.getItem("activeProject");

    function storeData () {
        localStorage.setItem("projectList", JSON.stringify(projectList));
    }

    const addProject = (project) => {
        projectList[project] = [];
        console.log(JSON.stringify(projectList))
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

    const updateProjectTask = (project, task) => {
        for (let i = 0; i < projectList[project].length; i++) {
            if (projectList[project][i].name === task) {
                projectList[project][i].done = !projectList[project][i].done;
                storeData();
                break;
            }
        }
    }

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
        console.log(projectList);
    }

    const getProjects = () => { return projectList }

    const getActiveProject = () => { return activeProject }

    return { addProject, addProjectTask, delProjectTask, delProject, getProjects, getActiveProject, setActiveProject, updateProjectTask };

};

export { Projects }