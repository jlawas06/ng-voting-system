# ng-voting-system

## Overview

The ng-voting-system is a web application designed to facilitate voting processes. Built with Angular, this project aims to provide a seamless, user-friendly interface for creating and managing voting events.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Frontend:** Angular 16
- **Styling:** TailwindCSS
- **State Management:** NgRx
- **Routing:** Angular Router
- **HTTP Client:** Angular HttpClient
- **API Services:** ng-openapi-gen

## Features

- **User Authentication:** Secure login and registration.
- **Create Polls:** Users can create polls with multiple options.
- **Vote:** Users can vote on existing polls.
- **View Results:** Real-time results of the polls.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Angular CLI](https://angular.io/cli) (version 16 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jlawas06/ng-voting-system.git
    cd ng-voting-system
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Install ng-openapi-gen globally if not already installed:

    ```bash
    npm install -g ng-openapi-gen
    ```

4. Generate services and models from the API:

    ```bash
    ng-openapi-gen --input https://api.yourapi.com/swagger.json --output src/app/api
    ```

## Running the Application

1. Start the development server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200`.

## Building the Application

1. Build the application for production:

    ```bash
    ng build --prod
    ```

2. The build artifacts will be stored in the `dist/` directory.

## Testing

1. Run unit tests:

    ```bash
    ng test
    ```

2. Run end-to-end tests:

    ```bash
    ng e2e
    ```

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
