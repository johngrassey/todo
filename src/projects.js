function Projects () {
    const projectList = [];

    const addProject = (project) => {
        projectList.push({[project]:[]});
        console.log(projectList);
    }

    const delProject = (index) => {
        projectList.splice(index, 1)
        console.log(projectList);
    }

    return { addProject, delProject };

};

export { Projects }