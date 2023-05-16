

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`

    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `Services` -This contain all the microservices.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
  - #### `Services` -This contain all the microservices.
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

![Screenshot (179)](https://github.com/yogesh-9999/Stones/assets/84492118/58720c3b-a161-4af0-bdc4-bf80ea6c17ac)
![Screenshot (180)](https://github.com/yogesh-9999/Stones/assets/84492118/d62b0a2b-94ab-4bcd-88c4-5c71a6dc1999)
![Screenshot (181)](https://github.com/yogesh-9999/Stones/assets/84492118/57ddc03a-917e-44d6-aff3-e33775cde848)
![Screenshot (182)](https://github.com/yogesh-9999/Stones/assets/84492118/57457cdf-f286-4389-ba7f-51aa72873a78)

