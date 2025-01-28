# Unhandled Promise Rejections in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Asynchronous operations within routes often lack proper error handling, causing the application to crash silently or behave unpredictably.

## The Bug

The `bug.js` file shows an example where an asynchronous operation (`someAsyncOperation`) is called within a route handler.  If this operation fails, the error is not caught, leading to an unhandled promise rejection.

## The Solution

The `bugSolution.js` demonstrates the correct approach: using `.catch()` to handle potential errors.  This prevents the application from crashing and allows for graceful error handling, such as sending an error response to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` (will likely crash or not give any response).
4. Run `node bugSolution.js` (will display an error message)

This example highlights the importance of comprehensive error handling in asynchronous Express.js applications. Always handle potential errors to ensure application stability and reliability.