function Projects () {
    const projectList = {"My List" : []};

    const addProject = (project) => {
        projectList[project] = [];
    }

    const addProjectTask = (project, task) => {
        projectList[project].push(task);
    }

    const delProjectTask = (project, task) => {

        // NEED TO FIX THIS ONE 

        console.log(projectList);
    }

    const delProject = (project) => {
        delete projectList[project];
        console.log(projectList);
    }

    const getProjects = () => { return projectList }

    return { addProject, addProjectTask, delProjectTask, delProject, getProjects };

};

export { Projects }