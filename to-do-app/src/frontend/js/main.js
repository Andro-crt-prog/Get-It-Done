const apiUrl = 'http://localhost:3000/api/tasks';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskTime = document.getElementById('task-time');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    if (addTaskButton) {
        addTaskButton.addEventListener('click', async () => {
            const taskTitle = taskInput.value.trim();
            const taskDateValue = taskDate.value;
            const taskTimeValue = taskTime.value;
            if (taskTitle && taskDateValue && taskTimeValue) {
                try {
                    await addTask(taskTitle, taskDateValue, taskTimeValue);
                    taskInput.value = '';
                    taskDate.value = '';
                    taskTime.value = '';
                    loadTasks();
                } catch (error) {
                    console.error('Error adding task:', error);
                }
            }
        });
    }

    if (taskList) {
        taskList.addEventListener('click', async (event) => {
            if (event.target.classList.contains('remove-task')) {
                const taskId = event.target.dataset.id;
                try {
                    await removeTask(taskId);
                    loadTasks();
                } catch (error) {
                    console.error('Error removing task:', error);
                }
            } else if (event.target.classList.contains('mark-completed')) {
                const taskId = event.target.dataset.id;
                try {
                    await markTaskCompleted(taskId);
                    loadTasks();
                } catch (error) {
                    console.error('Error marking task as completed:', error);
                }
            }
        });
    }

    const loadTasks = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const renderTasks = (tasks) => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task.title} (Added on: ${task.timestamp})`;
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            const removeButton = document.createElement('button');
            removeButton.innerHTML = '&times;';
            removeButton.classList.add('remove-task');
            removeButton.dataset.id = task.id;

            const completeButton = document.createElement('button');
            completeButton.innerHTML = '&#x2713;';
            completeButton.classList.add('mark-completed', 'checklist');
            completeButton.dataset.id = task.id;

            const taskActions = document.createElement('div');
            taskActions.classList.add('task-actions');
            taskActions.appendChild(completeButton);
            taskActions.appendChild(removeButton);

            taskItem.appendChild(taskActions);
            taskList.appendChild(taskItem);
        });
    };

    const addTask = async (title, date, time) => {
        const timestamp = `${date} ${time}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, timestamp }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    };

    const removeTask = async (id) => {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    };

    const markTaskCompleted = async (id) => {
        const response = await fetch(`${apiUrl}/${id}/complete`, {
            method: 'PATCH',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    };

    loadTasks();
});