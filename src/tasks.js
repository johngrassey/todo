class Task {
    constructor (name, description, dueDate, priority, notes) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.done = false;
    }
}

function addTask (name, description, dueDate, priority, notes) {
    const item = new Task(name, description, dueDate, priority, notes)
    return item;
}

export { addTask };