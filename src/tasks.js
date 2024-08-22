class Task {
    constructor (name, description, dueDate, priority, notes, checklist) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

function addTask (name, description, dueDate, priority, notes) {
    const item = new Task(name, description, dueDate, priority, notes)
    return item;
}

export { addTask };