# ZenDen Next.js To-Do Application

## Overview

This Next.js To-Do application allows users to manage their tasks with a modern, responsive user interface. The application supports full CRUD (Create, Read, Update, Delete) operations and utilizes server-side rendering for improved performance and SEO.

## Features

- **Add New Tasks**: Users can add tasks with details such as title, description, and due date.
- **Authentication**: Handles user login and registration with JWT tokens.
- **User Authentication**: Secure task management with JWT tokens.
- **Mark Tasks**: Users can mark tasks as complete or incomplete.
- **Edit Tasks**: Users can modify existing tasks.
- **Delete Tasks**: Users can remove tasks from the list.
- **View Tasks**: Tasks are displayed in a list format.
- **Responsive Design**: The UI is designed to be responsive and visually appealing across various devices.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: Adds static typing to JavaScript for improved development efficiency.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/nextjs-todo-app.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd nextjs-todo-app
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open your browser and go to `http://localhost:3000` to see the application in action.

## Usage

- **Add a Task**: Click the "Add Task" button, enter the task title, description, and due date, then click "Save".
- **Mark a Task**: Click the checkbox next to a task to mark it as complete or incomplete.
- **Edit a Task**: Click the "Edit" button next to a task, update the details, and click "Update".
- **Delete a Task**: Click the "Delete" button next to a task to remove it from the list.
- **View Tasks**: All tasks are displayed in a list format with options to filter by completion status.

## Project Structure

- **`/components`**: Contains reusable React components such as task forms, task items, and headers.
- **`/context`**: Contains context  and configuration for managing the application state.


## Contributing

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Create a Branch**: 

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Commit Your Changes**:

    ```bash
    git add .
    git commit -m "Add your commit message"
    ```

4. **Push to the Branch**:

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a Pull Request**: Navigate to the repository on GitHub and click "New Pull Request".

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Contact

For any questions or suggestions, reach out to [your-email@example.com](mailto:your-email@example.com).
