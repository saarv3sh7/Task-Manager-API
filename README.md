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

## Setup Instructions (for Mac M1)

1. **Clone the repository**  

```
git clone https://github.com/saarv3sh7/Task_Manager_API.git
cd Task_Manager_API
```

2. **Install dependencies**  

```
npm install
```

3. **Create `.env` file**  

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/task-manager-api
JWT_SECRET=your_jwt_secret
```

4. **Start MongoDB locally**  
```
mongod --dbpath <MongoDB-db-Folder>
```

5. **Run the server**  
```
npm start
```


Server runs on: `http://localhost:5000`

---

## API Endpoints

### User Routes

| Method | Endpoint             | Description            | Protected |
|--------|----------------------|------------------------|-----------|
| POST   | /api/users/register  | Register new user      | No        |
| POST   | /api/users/login     | Login and get JWT      | No        |

### Task Routes (Require Bearer Token)

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| GET    | /api/tasks    | Get all user tasks    |
| POST   | /api/tasks    | Create new task       |
| PUT    | /api/tasks/:id | Update task by ID     |
| DELETE | /api/tasks/:id | Delete task by ID     |

---

## Postman API Testing Guide

1. **Register**
- Method: `POST`
- URL: `http://localhost:5000/api/users/register`
- Body (raw JSON):
  ```json
  {
    "name": "Sarvesh",
    "email": "test@example.com",
    "password": "123456"
  }
  ```


2. **Login**
- Method: `POST`
- URL: `http://localhost:5000/api/users/login`
- Body (raw JSON):
  ```json
  {
    "email": "test@example.com",
    "password": "123456"
  }
  ```
- Copy the `token` from response for the next requests


3. **Get All Tasks**
- Method: `GET`
- URL: `http://localhost:5000/api/tasks`
- Header:
  ```
  Authorization: Bearer <token>
  ```


4. **Create Task**
- Method: `POST`
- URL: `http://localhost:5000/api/tasks`
- Header:
  ```
  Authorization: Bearer <token>
  ```
- Body:
  ```json
  {
    "title": "Complete Assignment",
    "description": "Finish backend API assignment"
  }
  ```


5. **Update Task**
- Method: `PUT`
- URL: `http://localhost:5000/api/tasks/<task_id>`
- Header:
  ```
  Authorization: Bearer <token>
  ```
- Body:
  ```json
  {
    "completed": true
  }
  ```


6. **Delete Task**
- Method: `DELETE`
- URL: `http://localhost:5000/api/tasks/<task_id>`
- Header:
  ```
  Authorization: Bearer <token>
  ```

---
