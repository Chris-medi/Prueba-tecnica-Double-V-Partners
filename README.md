# Technical Test Application

This project is a hybrid application using Angular and Next.js, built with Nx workspace and implementing a microfrontend architecture.

## Technologies Used

- Angular 19.2.0
- Next.js
- Nx Workspace
- Module Federation
- TailwindCSS
- Node Version 20

## Project Structure

The project is organized as follows:

- `apps/host`: Main application (Angular shell)
- `apps/remote`: Angular application
- `apps/tecnical_app`: Next.js application
- `libs/my-lib`: Shared library containing common components
- `libs/shared/data-access-user`: Shared library for user data access and interceptors

## Features

- Hybrid architecture combining Angular and Next.js
- Microfrontends with Module Federation
- Lazy loading of routes and components
- Error handling with notification system
- HTTP interceptors for request caching and error handling
- Modular architecture with shared libraries

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Chris-medi/Prueba-tecnica-Double-V-Partners.git

2. Go to folder
```bash
cd Prueba-tecnica-Double-V-Partners
```

2. Install dependencies:
```bash
npm install
```

### Running the Applications
1. Start the next app:
```bash
npx nx dev tecnical_app
```
2. Start the angular app:
```bash
npx nx serve host
```

### Accessing the Applications
- Angular Shell: ### Accessing the Applications
Open your web browser and navigate to
```
http://localhost:3000
```
- Now you can access the application and see the microfrontends in action.

### Notes
- The federation module could not be configured correctly to communicate between Angular and Next
- To manage data communication, url params is used