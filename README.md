# Task Management API with User Authentication and Authorization

This is a Task Management API built with Node.js, Express.js, and MongoDB. It allows users to create, retrieve, update, and delete tasks while also implementing user authentication and authorization via JWT. 

## Features

- **Create** a task
- **Retrieve** all tasks or a specific task by ID
- **Update** a task's details
- **Delete** a task by ID
- **Task Status** can be updated to "Pending", "In Progress", or "Completed"
- **Task Timestamps** for `createdAt` and `updatedAt`
- **User Authentication** with JWT
- **User Authorization**: Only authenticated users can manage tasks

## Requirements

- Node.js and npm installed
- MongoDB instance (local or MongoDB Atlas)

## Installation & Setup

### 1. Clone the repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/MohammedHassan07/TaskManagment
cd TaskManagement
```
Install dependencies

```bash
npm install 
```

Set up environment variables

Create a .env file in the root directory of your project. This file will store your environment variables for sensitive information such as the MongoDB URI and JWT secret key. take refrence from .env.sample file

Now run the following command
```bash
npm start
```

## Endpoints

### **User Authentication**

#### POST /create-profile
Create a new user.

##### Request Body:
```json
{
  "email": "user1",
  "password": "userpassword"
}
```

#### POST /login
Login user.

##### Request Body:
```json
{
  "email": "user1",
  "password": "userpassword"
}
```
### **Task Management**

### 1. **Create a Task**
- **Endpoint**: `POST /tasks`
- **Description**: Creates a new task.
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
  }
  
### 2. **Update a Task**
- **Endpoint**: `PUT /tasks/:id`
- **Description**: Update status of task.
- **query parameter**: taskId: taskId


### 3. **Delete a Task**
- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Delete a task.
- **query parameter**: taskId: taskId


### 4. **Get all Task**
- **Endpoint**: `GET /tasks`
- **Description**: Get all tasks.


