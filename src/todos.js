class ToDo {
    constructor (title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
}

function addToDo (title, description, dueDate, priority, notes, checklist) {
    const item = new ToDo(title, description, dueDate, priority, notes, checklist)
    console.log(item);
    return item;
}

export { addToDo };