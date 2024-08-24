function Projects () {
    const projectList = {"My List" : []};

    let activeProject = "My List";

    const addProject = (project) => {
        projectList[project] = [];
    }

    const setActiveProject = (project) => {
        activeProject = project;
    }

    const addProjectTask = (project, task) => {
        projectList[project].push(task);
    }

    const delProjectTask = (project, task) => {

        for (let i = 0; i < projectList[project].length; i++) {
            if (projectList[project][i].name === task) {
                projectList[project].splice(i, 1);
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

    return { addProject, addProjectTask, delProjectTask, delProject, getProjects, getActiveProject, setActiveProject };

};

export { Projects }