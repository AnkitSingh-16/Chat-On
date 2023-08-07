# Chat On

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to sign up, sign in, and participate in real-time chat conversations with other users. It utilizes WebSockets to enable instant message delivery, providing a seamless and responsive chatting experience.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
   


## Features

- **User Registration**: New users can sign up to create an account with a unique username and password.
- **User Authentication**: Registered users can sign in with their credentials securely.
- **Real-Time Chat**: Users can send and receive messages in real-time with other users in the chat rooms.
- **Multiple Chat Rooms**: The application supports multiple chat rooms, and users can join any chat room they prefer.
- **Unread Messages**: Users receive a notification for unread messages, ensuring they don't miss any important conversations.

## Technologies Used

- **MongoDB**: Database for storing user information, chat rooms, and messages.

- **Express.js**: Backend server framework for handling HTTP requests and WebSocket connections.
  
- **React**: Frontend library for building the user interface and managing application state.
  
- **Node.js**: Runtime environment for executing JavaScript code on the server-side.
  
- **Socket.IO**: Library for enabling real-time communication through WebSockets.
  
- **bcrypt**: For securely hashing and salting user passwords.

- **JWT (JSON Web Tokens)**: For managing user authentication and sessions.

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.



## Installation

Clone the repository to your local machine

```bash
  git clone https://github.com/AnkitSingh-16/Chat-On
```

Navigate to the project directory

```bash
  cd Chat-On
```

Install the server dependencies

```bash
  npm install
```

Install the client dependencies

```bash
  cd frontend
  npm install
```

## Configuration

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` = your mongodb connection string

`JWT_SECRET` = your secret key for jwt


## Running the Application

Navigate to the project directory

```bash
  cd Chat-On
```

Start the server

```bash
  npm start
```

Start the Client

```bash
  cd frontend
  npm start
```

The application will run on http://localhost:3000 by default.



## Screenshots

![Login_Page Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Chat-On/Image/homeimg.png)
![Chat_Page Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Chat-On/Image/chatimg.png)
![Profile_Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Chat-On/Image/img2.png)
![Group Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Chat-On/Image/img1.png)



















