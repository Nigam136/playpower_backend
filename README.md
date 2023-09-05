# Title of project

Assignment Management API

# Description

This API provides functionality for managing student assignments, including user authentication, creating assignments, updating assignments, deleting assignments based on criteria.

# Prerequisites

Node.js and npm installed on your machine.
Docker (for containerization).

# How to Install and run Project

Install the project dependencies:

### `npm init`

Running the Server:

To run the server locally, execute the following command:

### `nnpm start`

# API Endpoints

# 1.> Authentication

### Endpoint: `/user/register`

Method: `POST`
Description: registraion endpoint. Accepts any username, password and Role as a student or teacher.

# Request Body:

{
"username": "yourusername",
"password": "yourpassword"
"role":"yourRole"
}

# Response:

{
"user_id": id,
"username": "yourusername",
"password": "yourpassword",
"role": "yourRole",
"token_id": "your-jwt-token"
}

### Endpoint: `/users/login`

Method: `POST`
Description: Mock authentication endpoint. Accepts any username and password.

# Request Body:

{
"username": "yourusername",
"password": "yourpassword"
}

# Response:

{
"message": "user loggedin successfully...",
"user": {
"user_id": id,
"username": "yourusername",
"password": "yourpassword",
"role": "yourRole"
}
}

# 2.> Create Assignment

### Endpoint: `/ass/create`

Method: `POST`
Description: Create a new assignment by teacher only.

# Request Body:

{
"teacher_id": id,
"teacher_name": "yourusername",
"title": "Assignment Title",
"desc": "Assignment Description",
"dueDate": "4-9-2023",
}

# Response:

{
"ass_id": id,
"teacher_id": id,
"teacher_name": "yourusername",
"title": "Assignment Title",
"desc": "Assignment Description",
"dueDate": "4-9-2023"
}

# 3.> Update Assignment

### Endpoint: `/ass/update/:id`

Method: `PUT`
Description: Update selected assignment.

# Request Body:

{
"ass_id": 1,
"title": "Updated Title",
"description": "Updated Description",
"due_date": "2023-09-20"
}

# Response:

{
"message": "updated successfully...",
"data": [
{
"ass_id": 1,
"teacher_id": id,
"teacher_name": "yourusername",
"title": "Updated Title",
"desc": "Updated Description",
"dueDate": "2023-09-20"
}
]
}

# 4.> delete Assignment

### Endpoint: `/ass/delete/:id`

Method: `DELETE`
Description: delete selected assignment by ID.

# Request parameters:

`id`: The ID of the assignment to be deleted.

# Response:

{
message: "deleted successfully..."
}

# 5.> getAll Assignment

### Endpoint: `/ass/all`

Method: `GET`
Description: It fetches all the assignments from the databsae.

# Response:

{
"assignments": [
{
"id": 1,
"title": "Assignment 1",
"description": "Description 1",
"due_date": "2023-09-15",
"teacher_id": 4
},
{
"id": 2,
"title": "Assignment 2",
"description": "Description 2",
"due_date": "2023-09-20",
"teacher_id": 4
},
{
"id": 3,
"title": "Assignment 3",
"description": "Description 3",
"due_date": "2023-09-25",
"teacher_id": 5
}
]
}

# 5.> submit Assignment

### Endpoint: `/ass/submit`

Method: `POST`
Description: It post req to submit assignment.

# Request Body:

{
"assId":7,
"userId":1
}

# Response:

{
"message": "assignment submitted successfully"
}

# Docker Repository

This microservice is available as a Docker image on Docker Hub.

- Docker Repository URL: [https://hub.docker.com/r/nigam9103/assignment-management]

# Postman API Documentation

You can find detailed API documentation and sample requests in our Postman collection.

- [https://documenter.getpostman.com/view/16604458/2s9Y5eLdot#fa0456ff-0636-418d-978f-60d21e48c375]

The collection includes requests for authentication, creating assignments, updating assignments, deleting assignments, submitting assignments, and more. You can import this collection into your Postman workspace to test the API endpoints and explore their functionality.

# Testing the API

You can use tools like Postman to test the API endpoints. Make sure to include the JWT token obtained from the /auth/login endpoint in the request headers for authentication.
