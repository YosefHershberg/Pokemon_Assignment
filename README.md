# Pokemon Assignment

This repository contains a React application bootstrapped with Vite, featuring a search bar to query a list of Pokémon. The user can add Pokémon from the search list to their personal Pokémon list, and they have the ability to edit the Pokémon's name and nickname before saving it. The UI is built using Styled Components and Material UI, and it includes support for both dark and light modes. Redux (with Redux Thunks) is used to handle the global state, including fetching data from the Pokémon API.

## Getting Started

To get started with the Vite React app, follow these steps:

1. Clone this repository: `git clone https://github.com/YosefHershberg/Pokemon_Assignment.git`
2. Change into the project directory: `cd Pokemon_Assignment`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`

## Features

- **Pokémon Search**: Enter a search query in the search bar to find Pokémon matching the query.
- **Pokémon List**: View a personal Pokémon list where you can add and remove Pokémon.
- **Pokémon Name/Nickname Editing**: Edit the name and nickname of a Pokémon before saving it to the list.
- **Styled Components**: Utilize Styled Components library for styling the UI components.
- **Material UI**: Leverage Material UI library for pre-built UI components and theming.
- **Dark/Light Mode**: Toggle between dark and light modes for the application UI.
- **Redux**: Manage the global state using Redux, including fetching data from the Pokémon API.
- **Redux Thunks**: Use Redux Thunks middleware to handle asynchronous actions, such as API requests.

## Pokémon API

The application fetches Pokémon data from the Pokémon API. You can access the API at [https://pokeapi.co/](https://pokeapi.co/). Make sure to familiarize yourself with the API documentation to understand the available endpoints and data structures.

## Project Structure

The project structure follows a typical React application layout:

- `public/`: Contains the public assets like HTML, images, and favicon.
- `src/`: Contains the application source code.
  - `index.js`: Entry point of the application.
  - `App.js`: The root component of the application.
  - `components/`: Directory for React components.
  - `styles/`: Directory for CSS or styling-related files.
  - `redux/`: Directory for Redux-related files, including actions, reducers, and thunks.


