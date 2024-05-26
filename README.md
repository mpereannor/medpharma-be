# MedPharma

MedPharma is a web application for managing consultations in a health facility. This repository contains the backend server for the application.

## Getting Started

To get started with MedPharma, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Install dependencies by running `npm install`
4. Run the following command to spin up the application using Docker: 
   ```
   docker compose up --build -d
   ```
5. Set up your environment variables by creating a `.env` file based on the `.env.example` file.
6. Run the server using `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in production mode.

### `npm run dev`

Runs the server in development mode using nodemon for hot reloading.

### `npm run build`

Builds the server for production deployment.

### `npm run seed`

Seeds the database with initial data.

### `npm test`

Runs the test suite using Jest.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `PORT`: The port on which the server will run. Default is 8000.
- `NODE_ENV`: The environment mode. Default is development.
- `AUTH0_DOMAIN`: Your Auth0 domain.
- `AUTH0_CLIENT_ID`: Your Auth0 client ID.
- `AUTH0_CLIENT_SECRET`: Your Auth0 client secret.

