## SchoolERP API


## Overview

The SchoolERP API is a backend application designed to manage school-related operations efficiently. It supports user authentication, role-based access control, and various functionalities tailored for different user roles, including Master, Principal, and Teacher. The API is built using Node.js and MongoDB for seamless data handling and management.

## Project Stack
- **Backend**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv


## Features

### User Authentication
- **Sign-Up**: Users can create an account with their details.
- **Sign-In**: Users can log in and receive a JWT for secure access.
- **Role-Based Access**: Different access levels for Master, Principal, and Teacher roles.

### User Management

- **Login Logs**: Track and store user login attempts.
- **Password Encryption**: Secure user passwords with bcrypt.

### MongoDB Integration

Store user data in MongoDB using Mongoose for schema management.

## Installation and Setup

### Prerequisites

- **Node.js**: Install the latest version of Node.js from [here](https://nodejs.org/).
- **MongoDB**: Ensure you have access to a MongoDB instance, either locally or using MongoDB Atlas.

### Steps to Install

1. Clone the repository:
   
```bash
git clone https://github.com/rakholiyaragini/SchoolERP-API.git
```


2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root of the project and add the following details:

```plaintext
PORT=3000
MONGODB_URL=your_mongo_db_url
JWT_SECRET=your_jwt_secret
```
4. Run the server:

```bash
npm start
```
5. Open the app in your browser:
```bash
http://localhost:3008
```

### Environment 

The project requires the following environment variables:

- **PORT**: The port on which the server will run (e.g., 3000).
- **MONGODB_URL**: MongoDB connection string, provided by MongoDB Atlas or local MongoDB instance.
- **JWT_SECRET**: A secret key for signing JWT tokens.

### Usage
Once the server is running, you can interact with the API using tools like Postman. Here are the main steps to use the API:

- **Sign-Up** : Register users with their name, email, password, and role (Master, Principal, or Teacher).
- **Sign-In** : Authenticate users and retrieve a JWT token.
- **Role-Based Actions**: Access restricted routes based on user roles after authentication.

### API Endpoints

## Authentication

# Sign-Up

- **Endpoint**: /signUp
- **Method**: POST
- **Payload**:
```bash
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "your_password",
  "role": "Master"  // or "Principal" or "Teacher"
}
```

# Sign-In
- **Endpoint**: /signIn
- **Method**: POST
- **Payload**:

```bash
{
  "email": "johndoe@example.com",
  "password": "your_password"
}
```

# Response:

```bash
{
  "message": "Login Successful",
  "token": "JWT_TOKEN_HERE",
  "role": "Master"
}
```

### Role-Based Endpoints

## Principal Routes

- **Endpoint**: /principal
- **Method**: GET

Teacher Routes

- **Endpoint**: /teacher/dashboard
- **Method**: GET

## Folder Structure
``` bash
/SchoolERP-API
 ├── /config // Configuration files
 ├── /controllers // Logic for handling requests
 ├── /models // Mongoose models (User, etc.)
 ├── /routes // Express.js routes for authentication and user management
 ├── index.js // Main entry point of the application
 └── package.json // Project dependencies and scripts
 ```

**Contributor**: (https://github.com/rakholiyaragini)

If you have any Doubts or suggestions,  contact me at raginirakholiya123@gmail.com

