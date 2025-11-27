# Digital Business Card

A responsive digital business card application built with React and Vite. This project serves as a personal portfolio component, displaying contact information and social media links in a clean, modern card layout.

## Features

- **Profile Display**: Showcases profile picture and key details.
- **Social Integration**: Direct links to social media platforms (GitHub, LinkedIn, Twitter, etc.).
- **Responsive Design**: Optimized for various screen sizes.
- **Component-Based Architecture**: Modular structure using React components.

## Technologies Used

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- CSS3

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
   ```bash
   cd digital-business-card
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Usage

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal) to view the application.

## Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

```text
src/
├── assets/          # Images and icons
├── components/      # React components (Card, Header, Footer, etc.)
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```