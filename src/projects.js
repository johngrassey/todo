function Projects() {
  //const projectList = {"My List" : []};
  const projectList = JSON.parse(localStorage.getItem("projectList"));

  let activeProject = localStorage.getItem("activeProject");

  function storeData() {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }

  const addProject = (project) => {
    projectList[project] = [];
    storeData();
  };

  const setActiveProject = (project) => {
    activeProject = project;
    localStorage.setItem("activeProject", activeProject);
  };

  const addProjectTask = (project, task) => {
    projectList[project].push(task);
    storeData();
  };

  const completeTask = (project, task) => {
    for (let i = 0; i < projectList[project].length; i++) {
      if (projectList[project][i].name === task) {
        projectList[project][i].done = !projectList[project][i].done;
        storeData();
        break;
      }
    }
  };

  const updateTask = (
    project,
    task,
    name,
    notes,
    duedate,
    priority,
    description,
  ) => {
    projectList[project][task].name = name;
    projectList[project][task].notes = notes;
    projectList[project][task].dueDate = duedate;
    projectList[project][task].priority = priority;
    projectList[project][task].description = description;
    storeData();
  };

  const delProjectTask = (project, index) => {
    projectList[project].splice(index, 1);
    storeData();
  };

  const delProject = (project) => {
    delete projectList[project];
  };

  const getProjects = () => {
    return projectList;
  };

  const getActiveProject = () => {
    return activeProject;
  };

  return {
    addProject,
    addProjectTask,
    delProjectTask,
    delProject,
    getProjects,
    getActiveProject,
    setActiveProject,
    completeTask,
    updateTask,
  };
}

export { Projects };
