# PrettyGood - Recipe App
PrettyGood is a full-stack web application targeting those who want to explore new recipes, are starting to get into cooking, or simply do not know what to cook for breakfast, lunch, and/or dinner. Home to hundreds of recipes provided by [TheMealDB](https://www.themealdb.com/api.php) and [TheCocktailDB](https://www.thecocktaildb.com/api.php), there is bound to be a recipe that speaks to you.

## Features
* View Recipes organized by Country / Ingredient
* Recipe page that displays ingredients, instructions, image of the finished product, and a link to a YouTube video tutorial
* Fully responsive & modern user interface
* Modern Login/Register forms with client-side validation & feedback
* Protected routes that can only be accessed by authenticated users
* Data persistence - Authenticated users can save recipes to their 'favourites'
  * Users can then view all of their 'favourited' recipes in one location on the app

## Technologies
**Front-End**: React, [React Router (v6)](https://reactrouter.com/en/main), [Chakra UI](https://chakra-ui.com/)

**Back-End**: MongoDB + Mongoose, Express.js, Node

**Authentication**: Firebase Authentication, React Context API

**Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)

**Security**: [Helmet](https://helmetjs.github.io/)

## Installation
* Fork/Clone the respository
* Install the dependencies: `cd server -> npm install` & `cd client -> npm install`
* Install MongoDB

**Client Directory**
* Create a `.env.local` file in the root client directory
* Create a Firebase project and paste your credentials into the `.env.local` file

**Server Directory**
* Create a .env file in the root server directory
* Create two environment variables `PORT` and `DATABASE_URL` that will hold the port number, and mongoDB URL respectively
* Navigate to your Firebase project's settings and generate a private key under `Service Accounts`; a .JSON file will be downloaded onto your device
* Move the .JSON file holding your private key to `server/firebase` and rename it to `serviceAccount.json`

## Usage
* Start Mongod & Mongo
* Client Directory: `npm start`
* Server Directory:
  * Compile TypeScript: `npm run build`
  * Start Server: `npm run start`