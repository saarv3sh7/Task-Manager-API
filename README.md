# Task Manager API

This is a simple RESTful Task Manager API built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage their tasks through authenticated endpoints. The project includes user authentication using JWT and secure password storage using bcrypt.

## Features

- User Registration and Login (JWT-based Authentication)
- Secure Password Hashing
- CRUD Operations for Tasks (Create, Read, Update, Delete)
- User-based task access control
- MongoDB integration for data persistence
- Tested via Postman

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- bcryptjs
- jsonwebtoken (JWT)
- dotenv
- Postman (for API testing)

## Prerequisites

- Node.js and npm installed
- MongoDB installed locally
- MongoDB running using custom db path:

mongod --dbpath /Users/sarveshyeutkar/mongodb-data/db

## Project Setup

1. Clone the repository:
