class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async addTask(req, res) {
        try {
            const { title } = req.body;
            const newTask = await this.taskService.createTask(title);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async removeTask(req, res) {
        try {
            const { id } = req.params;
            await this.taskService.deleteTask(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async markTaskCompleted(req, res) {
        try {
            const { id } = req.params;
            const updatedTask = await this.taskService.updateTaskStatus(id, true);
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default TaskController;