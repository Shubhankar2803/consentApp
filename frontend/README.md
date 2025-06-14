# ConSent MVP Frontend

This is the frontend application for the ConSent MVP project, built using React and TailwindCSS. The application allows users to give, track, and revoke data-sharing consents.

## Features

- **Authentication**: Users can log in or sign up using Firebase Authentication.
- **Dashboard**: Displays a list of consents given or revoked by the user.
- **Consent Form**: A form for users to provide consent for data sharing.
- **Link-Based Consent**: Users can accept or reject consent via a unique link.
- **Logs Page**: View action history related to consents.
- **Revoke Consent**: Users can toggle or delete their consent.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up for authentication.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd consent-mvp/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
   - Create a `firebase.js` file in the `src` directory with your Firebase configuration.

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Folder Structure

- `public/`: Contains the main HTML file.
- `src/`: Contains all React components and application logic.
- `src/components/`: Contains individual React components.
- `src/styles/`: Contains TailwindCSS styles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.