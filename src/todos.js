class ToDo {
    constructor (title, description, dueDate, priority, notes, checklist, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.project = project;
    }
}

function addToDo (title, description, dueDate, priority, notes, checklist, project) {
    const item = new ToDo(title, description, dueDate, priority, notes, checklist, project)
    console.log(item);
    return item;
}

export { addToDo };