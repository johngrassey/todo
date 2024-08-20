function Projects () {
    const projectList = {"My List" : []};

    const addProject = (project) => {
        projectList[project] = [];
        //projectList.push({[project]:[]});
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

    const delProject = (project) => {
        delete projectList[project];
        //projectList.splice(index, 1)
        console.log(projectList);
    }

    const getProjects = () => { return projectList }

    return { addProject, addProjectTask, delProjectTask, delProject, getProjects };

};

export { Projects }