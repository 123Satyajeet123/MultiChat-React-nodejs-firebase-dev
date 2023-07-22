# MultiChat App - React, Node.js, Firebase

<p align="center">
  <img src="https://github.com/123Satyajeet123/MultiChat-React-nodejs-firebase-dev/assets/103361055/37a8341b-7af5-44eb-9055-b25a2976b0e0" alt="logo image">
</p>
This project is a real-time multi-user chat application built using React for the frontend, Node.js for the backend, and Firebase for the authentication system. The app uses Socket.IO to handle real-time communication between users in different chat rooms.

## Description

The MultiChat App allows users to sign in with their Google accounts, join different chat rooms, and send messages in real-time to other users in the same room. The app offers a seamless chatting experience with instant message updates, making it perfect for group discussions and collaborative work.

## Features

- Google Sign-In: Users can sign in securely using their Google accounts, ensuring authentication and privacy.
- Real-time Chat: Messages are sent and received instantly using Socket.IO, creating a smooth real-time chatting experience.
- Multi-Room Support: Users can join and participate in multiple chat rooms simultaneously.
- Simple and Intuitive UI: The user interface is designed to be user-friendly and easy to navigate.

## How to Use

To run the MultiChat App, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your machine.
- You need a Firebase project and obtain the Firebase configuration credentials.

### 1. Clone the Repository
```
git clone https://github.com/123Satyajeet123/MultiChat-React-nodejs-firebase-dev.git

cd MultiChat-React-nodejs-firebase
```

### 2. Setup Firebase Credentials

Copy your Firebase configuration credentials (usually found in the Firebase console) and replace them in the `server/config/firebaseConfig.js` file.

### 3. Install Dependencies

Navigate to both the "client" and "server" folders and install the dependencies.

```
cd client
npm install
cd ../server
npm install
```


### 4. Run the Development Servers

Start the frontend and backend development servers.

#### Frontend

```
cd client
npm run dev
```


The React app will run on http://localhost:3000.

#### Backend

```
cd server
npm start
```


The Node.js server will run on http://localhost:5000.

### 5. Sign in and Chat

Open http://localhost:3000 in your browser. You will be redirected to the Google Sign-In page. Sign in with your Google account.

Once logged in, you will be able to join existing chat rooms or create new ones. Enter a room and start chatting with other users in real-time!

## Folder Structure

The project is organized into two main folders:

- `client`: Contains the React frontend code.
- `server`: Contains the Node.js backend code.

## Deployment

To deploy the MultiChat App to a production environment, you can use services like Heroku or Firebase Hosting for the frontend and Firebase Functions or a cloud server for the backend.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. I welcome any improvements or bug fixes to make the MultiChat App even better.

## License

This project is licensed under the 'Do whatever you want license'.
