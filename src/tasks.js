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

function addTask (title, description, dueDate, priority, notes, checklist) {
    const item = new ToDo(title, description, dueDate, priority, notes, checklist)
    return item;
}

export { addTask };