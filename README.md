# ChatApp Server

This is the server-side application for the ChatApp project. It provides the backend functionality and API endpoints necessary for the ChatApp frontend to interact with the database, handle user authentication, and manage real-time messaging.

## Features

- **User Authentication:** Secure login and registration with JWT-based authentication.
- **Real-time Messaging:** Powered by WebSockets, enabling real-time communication between users.
- **Database Management:** MongoDB integration for storing user data, messages, and other necessary information.
- **CORS:** Configured to allow cross-origin requests from the frontend.

## Technologies Used

- **Node.js:** JavaScript runtime for building the backend server.
- **Express.js:** Web framework for creating the API endpoints.
- **MongoDB:** NoSQL database used for storing data.
- **Mongoose:** ODM library for MongoDB.
- **Socket.io:** Real-time bidirectional event-based communication.
- **JWT:** JSON Web Tokens for user authentication and session management.

## Getting Started

### Prerequisites

- **Node.js:** Make sure Node.js is installed on your machine.
- **MongoDB:** Ensure you have a running MongoDB instance.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/chatapp-server.git
    cd chatapp-server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your environment variables:**

    ```bash
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/chatapp
    JWT_SECRET=your_jwt_secret
    CLIENT_URL=http://localhost:3000
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST /api/auth/register:** Register a new user.
- **POST /api/auth/login:** Log in a user and receive a JWT.

### Messaging

- **GET /api/messages/:conversationId:** Get messages for a specific conversation.
- **POST /api/messages:** Send a new message.

### User

- **GET /api/users/:userId:** Get user details.

## WebSocket Events

- **connect:** Establish a connection to the WebSocket server.
- **disconnect:** Disconnect from the WebSocket server.
- **sendMessage:** Send a message to another user.
- **receiveMessage:** Receive a message from another user.

## Development

### Running in Development Mode

To start the server in development mode with hot-reloading, use:

```bash
npm run dev
Linting
To lint your code and fix issues:

bash
Copy code
npm run lint
Deployment
To deploy the server to a production environment:

Set the environment variables in the .env file for production.

Build the application:

bash
Copy code
npm run build
Start the server:

bash
Copy code
npm run start
Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
