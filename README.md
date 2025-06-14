# ConSent MVP

ConSent is a web application designed to give, track, and revoke data-sharing consents. This project aims to provide users with a simple and efficient way to manage their data-sharing preferences.

## Features

- **Authentication**: Users can log in or sign up using Firebase Authentication.
- **Dashboard**: A user-friendly interface to view all consents given or revoked.
- **Consent Form**: A form to request user approval for data sharing.
- **Link-Based Consent**: Users can accept or reject consent via a unique link.
- **Logs Page**: A history of actions taken regarding consents.
- **Revoke Consent**: Users can easily toggle or delete their consent.

## Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel (Frontend) + Render (Backend)

## Project Structure

```
consent-mvp
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── config
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account
- Firebase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/consent-mvp.git
   cd consent-mvp
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file and add your environment variables.

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

- Start the backend server:
  ```
  cd backend
  node src/app.js
  ```

- Start the frontend application:
  ```
  cd frontend
  npm start
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.