class TaskService {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    async addTask(title, timestamp) {
        const task = { 
            id: this.currentId++, 
            title, 
            completed: false, 
            timestamp 
        };
        this.tasks.push(task);
        return task;
    }

    async removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const removedTask = this.tasks.splice(index, 1);
            return removedTask[0];
        }
        return null;
    }

    async markTaskCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
            return task;
        }
        return null;
    }

    async getAllTasks() {
        return this.tasks;
    }
}

export default TaskService;