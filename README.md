
# Project README: React CRUD Single Page Application for Package Management

## Introduction

This project involves building a simple single-page CRUD (Create, Read, Update, Delete) application in React to manage a list of 'packages'. The application will provide functionalities to create, view, update, and delete packages.

## Features

- **Create Package:** Add new packages using a form.
- **View Packages:** Display all created packages in a separate component.
- **Update Package:** Edit package details through input fields, activated by a button on each package.
- **Delete Package:** Remove a package from the view.

## Technical Details

### State Management

- Packages will be stored in the React component's state.

### Components Structure

1. **PackageForm Component:** For creating new packages.
2. **PackageList Component:** Displays all packages.
3. **PackageItem Component:** Represents an individual package, receiving details via props from the PackageList.

While you could technically complete the project without following along with the recommended structure here, we would want to see things broken down into different components like this (otherwise every project would have like 10K lines of code in App.js). Part of the work here will be figuring out how the pieces connect.

Hint: [You may want to check out this link](https://react.dev/learn/sharing-state-between-components).

### Data Flow

- **Create:** Input package details in PackageForm to add to the state.
- **View:** PackageList reads and renders packages using PackageItem.
- **Update:** Edit button in PackageItem reveals input fields with current package details.
- **Delete:** Delete button in PackageItem removes the package from the state.

## Setup Instructions

1. **Installation:**
   - Ensure Node.js and npm are installed on your system.
   - Clone the project repository.
   - Navigate to the project directory and run `npm install` to install dependencies.
   - Note that you will not have to create a fresh React app for this project, just `npm install` as all the skeleton code is here by default.

2. **Starting the Project:**
   - In the project directory, run `npm start` to start the development server.
   - Open `http://localhost:3000` to view the app in the browser.

## Package Fields

Each package will contain the following fields:
- **ID:** A unique identifier (auto-generated).
- **Name:** The name of the package.
- **Description:** A brief description of the package.
- **Category:** The category to which the package belongs.
- **Price:** The price of the package.

## Submission

1. Fork the repository.
3. Commit your changes.
4. Push to your fork.
5. Open a pull request.
