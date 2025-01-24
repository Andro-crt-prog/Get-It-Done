# To-Do List Application

This is a simple To-Do List application built with Node.js, Express, and vanilla JavaScript. It allows users to add, remove, and mark tasks as completed.

## Features

- Add new tasks
- Remove existing tasks
- Mark tasks as completed

## Project Structure

```
todo-list-app
├── src
│   ├── backend
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── taskController.js
│   │   ├── models
│   │   │   └── taskModel.js
│   │   ├── routes
│   │   │   └── taskRoutes.js
│   │   └── services
│   │       └── taskService.js
│   ├── frontend
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── main.js
├── package.json
├── .babelrc
├── .eslintrc.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the backend server:
   ```
   npm start
   ```
2. Open `src/frontend/index.html` in your browser to access the application.

## Technologies Used

- Node.js
- Express
- JavaScript (ES6)
- HTML/CSS

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.