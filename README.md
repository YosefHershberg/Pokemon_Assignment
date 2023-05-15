# Pokemon_Assignment
This repository contains a React application bootstrapped with Vite, featuring a search bar to query a list of Pokémon.
The user can add Pokémon from the search list to their personal Pokémon list, and they have the ability to edit the Pokémon's name and nickname before saving it. 
The UI is built using Styled Components and Material UI, and it includes support for both dark and light modes.
Redux (with Redux Thunks) is used to handle the global state, including fetching data from the Pokémon API.

Getting Started
To get started with the Vite React app, follow these steps:

Clone this repository: git clone https://github.com/your-username/vite-react-app.git
Change into the project directory: cd vite-react-app
Install dependencies: npm install or yarn install
Start the development server: npm run dev or yarn dev
Open your browser and visit http://localhost:3000 to see the app running.
Features
Pokémon Search: Enter a search query in the search bar to find Pokémon matching the query.
Pokémon List: View a personal Pokémon list where you can add and remove Pokémon.
Pokémon Name/Nickname Editing: Edit the name and nickname of a Pokémon before saving it to the list.
Styled Components: Utilize Styled Components library for styling the UI components.
Material UI: Leverage Material UI library for pre-built UI components and theming.
Dark/Light Mode: Toggle between dark and light modes for the application UI.
Redux: Manage the global state using Redux, including fetching data from the Pokémon API.
Redux Thunks: Use Redux Thunks middleware to handle asynchronous actions, such as API requests.
Pokémon API
The application fetches Pokémon data from the Pokémon API. You can access the API at https://pokeapi.co/. Make sure to familiarize yourself with the API documentation to understand the available endpoints and data structures.

Project Structure
The project structure follows a typical React application layout:

public/: Contains the public assets like HTML, images, and favicon.
src/: Contains the application source code.
index.js: Entry point of the application.
App.js: The root component of the application.
components/: Directory for React components.
styles/: Directory for CSS or styling-related files.
redux/: Directory for Redux-related files, including actions, reducers, and thunks.
api/: Directory for API-related files, such as API service and utility functions.
Customization
Feel free to modify and customize the application to fit your needs. Some suggestions for customization include:

Customizing the styles of the UI components using Styled Components and Material UI theming.
Extending the Redux store and actions to handle more complex state management requirements.
Modifying the dark and light mode styles and behavior to match your desired design.
Adding additional features or interactions to enhance the Pokémon search and list functionalities.
Learn More
To learn more about Vite, check out the Vite documentation.

To learn more about React, check out the React documentation.

To learn more about Styled Components, visit the Styled Components documentation.

To learn more about Material UI, visit the Material UI documentation.

To learn more about Redux,




