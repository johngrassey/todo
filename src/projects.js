function Projects () {
    const projectList = [];

    const addProject = (project) => {
        projectList.push({[project]:[]});
        console.log(projectList);
    }

    const addProjectTask = (index, project, task) => {
        projectList[index][project].push(task);
        console.log(projectList);
    }

    const delProjectTask = (projIndex, project, taskIndex) => {
        projectList[projIndex][project].splice(taskIndex, 1);
        console.log(projectList);
    }

    const delProject = (index) => {
        projectList.splice(index, 1)
        console.log(projectList);
    }

    return { addProject, addProjectTask, delProjectTask, delProject };

};

export { Projects }