# Task Manager API

This is a simple Task Manager API built using Node.js, Express.js, and MongoDB. It supports user registration and authentication using JWT and allows users to perform full CRUD operations on tasks. Each task is associated with a specific authenticated user.

## Features

- User Registration and Login (JWT Authentication)
- Create, Read, Update, and Delete (CRUD) tasks
- Tasks are user-specific
- RESTful API architecture
- MongoDB for data storage

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- Bcrypt.js (for password hashing)
- Postman (for testing)

## Folder Structure
````markdown
```
Task_Manager_API/
├── controllers/
│ ├── taskController.js
│ └── userController.js
├── middleware/
│ └── auth.js
├── models/
│ ├── Task.js
│ └── User.js
├── routes/
│ ├── taskRoutes.js
│ └── userRoutes.js
├── .env
├── app.js
├── server.js
```
```

