# emaily
A node/react web application. Has basic googleOAuth sign-in flow with remote user data storage using MongoDB Atlas.

## GoogleOAuth Flow

Visit '/auth/google' or click the 'sign in' link on the homepage to log in to the app with your google profile.

Route handler redirects to a google account sign in. This will create a request to give the application access to the user's google account information. If the user accepts, google's API service will return an authentication token in the form of a token string. This token string along with the user's google profile id number is saved in the browser's memory in a cookie.
This cookie will be recalled and sent to google's servers to verify whenever the application requests the user's google account information. This token will be saved until the user logs out. 
Visiting this route will also create a new instance of a user and save it to the remote mongoDB database.

Visit 'https://localhost:5000/api/current_user' to display the google Id number of the profile that is currently logged in to the app.

Visit 'https://localhost:5000/api/logout' to log the user out of the app and delete the session cookie from memory.

## MongoDB + Mongoose.js

When the user signs in, their google account id is saved along with a generated user Id string as an object to a collection of objects hosted by remote Mongo database using the Mongoose.js package. The database is hosted by MongoDb Atlas. This way the app can keep track of the users and store and recal app data associated with the google account id. Because one google user can have many google accounts, google associates all these accounts to one single user ID number per person. So using this method the user can sign in with different gmail addresses and the validation would work the same and all stored app data will track accross multiple google accounts belonging to the same person.

## Passport + Cookie-Session

The passport node package is informed to use cookie-session node package in order to store the user's profile id of the user that is currently logged in to the application in the form of a browser cookie. This cookie remains in memory for 30 days or until the user signs out.

## React

This app has two servers: A client side server, which is the React server. This handles rendering JS to the front end. It also has a server side server, which is the Express server. This server passes JSON objects between the remote database and the app.
This app has been configured so that you can easily start up both servers in development mode by running the command:
  'npm run dev'
 in the terminal while inside of the '/server' directory.
 
 ## http-proxy-middleware
 
 This node package (installed in the client server) helps by automatically configuring routes depending on whether the app is being run in development mode, or if the app is being used in production (deployed on heroku) mode.
 This package is configured and exported in the '/client/src/setupProxy.js' file. Note that this package does not need to be required into other files because it is automatically searched for by the package.

## Heroku Deployment

Deployed at 'https://sheltered-crag-96114.herokuapp.com/'
