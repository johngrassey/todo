class Task {
    constructor (title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

function addTask (title, description, dueDate, priority, notes) {
    const item = new Task(title, description, dueDate, priority, notes)
    return item;
}

export { addTask };