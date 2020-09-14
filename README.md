# SPACEBOOK
[![Build Status](https://travis-ci.org/jessicablank/spacebook-mars.svg?branch=master)](https://travis-ci.org/jessicablank/spacebook-mars)
[![GitHub stars](https://img.shields.io/github/stars/jessicablank/spacebook-mars)](https://github.com/jessicablank/spacebook-mars/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jessicablank/spacebook-mars)](https://github.com/jessicablank/spacebook-mars/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/jessicablank/spacebook-mars)](https://github.com/jessicablank/spacebook-mars/issues)

🚀[Deployed on Heroku: https://spacebook-mars.herokuapp.com/](https://spacebook-mars.herokuapp.com/)

## Description:  
 The year is 2099. Humans now live in a colony on Mars. They need an app to help them plan their day. 
 
SPACEBOOK allows Martians to see the current weather for their colony location, check on photos from the nearby rover, and manage a task list. 

For future development: Martians will be able to connect with other Martians to share tasks, alert to weather conditions, and save Rover images. 

## Table of Contents:
* [Developers](#developers)
* [Quick Start](#quick-start)
* [Installing Locally](#installing-locally)
* [Usage & Tests](#usage-&-Tests)
* [ScreenShots](#screenshots)
* [License](#license)

# Developers
These Earthlings enjoy imagining life as Martians. Please feel free to reach out with questions or comments. 

### Lisbeth Machado
* :octocat: [GitHub](https://github.com/lisbethmachado)
* 📧 E-mail: lizmachado.xo@gmail.com

### Timothy Lam
* :octocat: [GitHub](https://github.com/tlam1288)
*  📧 E-mail: tlam1288@gmail.com

### Jessica Blankemeier
* :octocat: [GitHub](https://github.com/jessicablank)
*  📧 E-mail: jessicablankemeier@gmail.com

# Quick Start

These Martians are already registered on the 🚀[deployed site](https://spacebook-mars.herokuapp.com/) with populated task lists if you would like to test the application without creating a new Martian. 

* Test User 1

    * Martian Name: Mr. Martian XLF-12
    * Email: Mars.Rocks@email.com
    * Password: p@ssw0Rd

* Test User 2

    * Martian Name: Ms. Martian XLF-15
    * Email: Martians.Rocks@email.com
    * Password: p@ssw0Rd

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

# Usage & Tests
- **Sign-Up Page**

  New users must create a Martian profile to use the app.

  - Martian Name
    - Any combination of letters, numbers, characters, and spaces
  - Email
    - Must follow standard email@domain.com
  - Password
    - Any combination of letters, numbers, characters, and spaces

    **Test:** Martian will receive an error message if:
    - Email does not follow standard *email@domain.com* format.
    - User account already exists. 
    - Any field is left blank

- **Login Page**
  - Email
    - Must match the email entered during sign-up or receive an error
  - Password
    - Must match the password entered during sign-up or receive an error
- **Profile Page (Home Page)**
  - Upon log-in, the Martian will be greeted by Martian Name
  - The Martian will see the current Martian weather card:
    - Season: Displays current Martian season using current data from the NASA InSight API
    - Earth Day: Displays the Earth Day corresponding to the oldest data from the NASA InSight API. Note that this date will be approximately 15 days behind the actual current Earth Day. For example, if the actual Earth Day for the User is August 23, 2020, the Profile Page for the SPACEBOOK Martian will display August 8, 2020. This is for several reasons:
      - The actual data from the InSight API displays seven days worth of historical Mars data. For the purposes of this application, the developers imagined that data as a forecast. As a result, the current weather card always displays the oldest data from the seven days received from the Insight API.
      - There are 668 sols on Mars while there are 365 days on Earth. This means the data from Mars does not exactly line up with an Earth Day timeline.
      - The data from the InSight API displays seven sols with the most recent sol corresponding to about days behind the current actual Earth Day.
    - Martian Sol displays the Martian day, known as a Sol, for the weather information being displayed.
    - High Temp: Displays the high temperature recorded from the NASA InSight API in Celsius.
    - Low Temp: Displays the low temperature recorded from the NASA InSight API in Celsius.
  - The Martian will see a task card to record a task.
    - The Task Title is required in order to save the task. For Example: "_Eat Mars Bars_"
    - The Task Body is provided for more description. For Example: "_Because chocolate will help you stay alert._"
    - Once the Martian clicks **Save**, a modal will confirm the task is saved.
    - **Test:** Martian will receive an error if attempting to save a task without a title.
- **Tasks Page**
  - The Martian will see a card to quickly add a new task. Upon **save**, task will be added to the bottom of the task list below.
  - The task list allows the Martian to see previously added tasks with the oldest tasks displaying first.
    - These tasks are specific to each user. 
    - The Martian can click on the title of a task to see a modal with the task body.
    - The Martian can delete the task by clicking the **X**.
    - **Test:** Martian will receive an error if attempting to save a task without a title.
- **Rover Page**
    -   The Martian will see images from the Curiosity Rover that correspond to the approximate date displayed on the **Profile** page.


# Screenshots

Web Application Views Signup Page:

![WebSignup](./assets/spacebook-web-signup.png)

Web Application Views Login Page:

![WebLogin](./assets/spacebook-web-login.png)

Home Page:

![PhoneHome](./assets/sapcebook-phone-home.png)

Home Banner:

![TabletBanner](./assets/spacebook-banner-home.png)

Home Weather:

![HomeWeather](./assets/spacebook-weather-home.png)

Weather Info:

![WeatherInfo](./assets/spacebook-weather-modal.png)

Weather Page:

![PhoneWeather](./assets/spacebook-phone-weatherfull.png)

Home Task:

![HomeTask](./assets/spacebook-task-home.png)

Task Page:

![PhoneTask](./assets/spacebook-phone-taskfull.png)

Task Info:

![TaskInfo](./assets/spacebook-task-modal.png)

Rover Page:

![PhoneRover](./assets/spacebook-phone-rover.png)

Rover Info:

![RoverInfo](./assets/spacebook-rover-modal.png)

Inavlid Signup:

![InvalidSignup](./assets/spacebook-invalid-signup.png)

Invalid Login:

![InvalidLogin](./assets/spacebook-invalid-login.png)

No Match Page:

![NoMatch](./assets/no-match.PNG)

## License
Copyright 2020 - present Lisbeth Machado, Timothy Lam, Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)
