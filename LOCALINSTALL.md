# Installing Locally

Add a .env file at the top level of this project.

Then inside of the .env add a SERVER_SECRET set to any value you'd like

```
SERVER_SECRET = 123456
```

First off make sure you have a local version of MongoDB running on your machine. This project will make a local database for you called `appDB`.

```
mongod
```

Start by installing front and backend dependencies. While in the root directory, run the following command:

```
npm install
```

After all installations complete, run the following command in your terminal:

```
npm start
```

That's it! your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.