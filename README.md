# emaily
email/password googleOAuth user sign-in flow with remote user data storage.

## GoogleOAuth Flow

user visits /auth/google

Route handler redirects to a google account sign in. This will create a request to give the application access to the user's google account information. If the user accepts, google's API service will return an authentication token in the form of a token string. This token string is saved in cookies. This cookie will be recalled and sent to google's servers to verify whenever the application requests the user's google account information. This token will be saved until the user logs out. 

## MongoDB + Mongoose.js

When the user signs in, their google account id is saved as an object to a collection of objects hosted by remote Mongo database using the Mongoose.js package. The database is hosted by MongoDb Atlas. This way the app can keep track of the users and store and recal app data associated with the google account id. Because one google user can have many google accounts, google associates all these accounts to one single user ID number per person. So using this method the user can sign in with different gmail addresses and the validation would work the same and all stored app data will track accross multiple google accounts.

## Passport + Cookie-Session

The passport node package is informed to use cookie-session node package in order to store the google profile data of the user that is currently logged in to the application in the form of a browser cookie. This cookie remains in memory for 30 days or until the user signs out. This cookie is used to request the user's google profile data.
