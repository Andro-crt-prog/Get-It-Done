class TaskModel {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            completed: this.completed
        };
    }
}

export default TaskModel;