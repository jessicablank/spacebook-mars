# SPACEBOOK
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🚀[Deployed on Heroku](https://spacebook-mars.herokuapp.com/)

## Description:  
 The year is 2099. Martians live in small colonies and need an app to help them plan their day. 
 
SPACEBOOK allows Martians to see the current weather for their colony location, check on photos from the nearby rover, and manage a task list. 

    
## Table of Contents:
* [Installation](#installing-locally)
* [Quick Start](#quick-start)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

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

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

# Quick Start
These Martians are already registered if the User would like to test the application without creating a new Martian. 

* Test User 1

    * Martian Name: Mr. Martian XLF-12
    * Email: Mars.Rocks@email.com
    * Password: p@ssw0Rd

* Test User 2

    * Martian Name: Ms. Martian XLF-15
    * Email: Martians.Rocks@email.com
    * Password: p@ssw0Rd

# Tests
* **Sign-Up Page** 

    New users must create a Martian profile to use the app. 
    1. Martian Name
        * Any combination of letters, numbers, characters, and spaces
    2. Email 
        * Must follow standard email@domain.com
    3. Password 
        * Any combination of letters, numbers, characters, and spaces
* **Login Page**
    1. Email 
        * Must match the email entered during sign-up or receive an error
    2. Password
        * Must match the password entered during sign-up or receive an error
* **Profile Page (Home Page)**
    1. Upon log-in, the Martian will be greeted by Martian Name
    2. The Martian will see the current Martian weather card:
        * Season: Displays current Martian season using current data from the NASA InSight API
        * Earth Day: Displays the Earth Day corresponding to the oldest data from the NASA InSight API. Note that this date will be approximately 15 days behind the actual current Earth Day. For example, if the actual Earth Day for the User is August 23, 2020, the Profile Page for the SPACEBOOK Martian will display August 8, 2020. This is for several reasons:
            1. The actual data from the InSight API displays seven days worth of historical Mars data. For the purposes of this application, the developers imagined that data as a forecast. As a result, the current weather card always displays the oldest data from the seven days received from the Insight API. 
            2. There are 668 sols on Mars while there are 365 days on Earth. This means the data from Mars does not exactly line up with an Earth Day timeline. 
            3. The data from the InSight API displays seven sols with the most recent sol corresponding to about  days behind the current actual Earth Day. 
        * Martian Sol displays the Martian day, known as a Sol, for the weather information being displayed. 
        * High Temp: Displays the high temperature recorded from the NASA InSight API in Celsius. 
        * Low Temp: Displays the low temperature recorded from the NASA InSight API in Celsius. 
    3. The Martian will see a task card to record a task. 
        * The Task Title is required in order to save the task. For Example: "*Eat Mars Bars*"
        * The Task Body is provided for more description. For Example: "*Because chocolate will help you stay alert.*"
        * Once the Martian clicks **Save**, a modal will confirm the task is saved.
* **Tasks Page**
    1. The Martian will see a card to quickly add a new task. Upon **save**, task will be added to the bottom of the task list below. 
    2. The task list allows the Martian to see previously added tasks with the oldest tasks displaying first. 
        1. The Martian can click on the title of a task to see a modal with the task body. 
        2. The Martian can delete the task by clicking the **X**.
* **Rover Page**
    1. The Martian will see up to three images from the Curiosity Rover that correspond to the approximate date displayed on the **Profile** page.

 