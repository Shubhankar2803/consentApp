# Consent MVP Backend

This is the backend for the Consent MVP application, which allows users to give, track, and revoke data-sharing consents.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling consent-related operations.
    - `consentController.js`: Functions for saving, retrieving, and revoking consents.
  - **models/**: Contains the Mongoose models for the application.
    - `consent.js`: Defines the schema for consent documents.
  - **routes/**: Contains the API route definitions.
    - `consentRoutes.js`: Exports routes for consent-related API endpoints.
  - `app.js`: Main entry point for the Express application, setting up middleware and routes.
  - **config/**: Contains configuration files.
    - `db.js`: Database connection logic for MongoDB Atlas.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd consent-mvp/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add your environment variables, such as the MongoDB connection string.

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your environment variables).

## API Endpoints

- **POST /consents**: Save a new consent.
- **GET /consents/:userId**: Get consents for a specific user.
- **PUT /consents/:id**: Revoke a consent.
- **GET /logs/:userId**: Fetch action history for a specific user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.