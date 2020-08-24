## SPACEBOOK TESTS

### New User

1. Users create a Martian on the "Sign-Up Page" 
    1. Martian Name
        * Any combination of letters, numbers, characters, and spaces
    2. Email 
        * Must follow standard email@domain.com
    3. Password 
        * Any combination of letters, numbers, characters, and spaces
2. Once the User has created a Sign-up, the User can use the same Email and Password to Login
    1. Email 
        * Must match the email entered during sign-up or receive an error
    2. Password
        * Must match the password entered during sign-up or receive an error
3. Profile Page
    1. Upon log-in, the Martian will be greeted by Martian Name
    2. The Martian will see the current Martian weather card:
        * Season: Displays current Martian season using current data from the NASA InSight API
        * Earth Day: Displays the Earth Day corresponding to the data from the NASA InSight API. Note that this date will be approximately 15 days behind the actual current Earth Day. For example, if the actual Earth Day for the User is August 23, 2020, the Profile Page for the Spacebook Martian will display August 8, 2020. This is for several reasons:
            1. The actual data from the InSight API displays seven days worth of historical Mars data. For the purposes of this application, the developers imagined that data as a forecast. As a result, the current weather card always displays the oldest data from the seven days received from the Insight API. 
            2. There are 668 sols on Mars while there are 365 days on Earth. This means the data from Mars does not exactly line up with an Earth Day timeline. 
            3. The data from the InSight API displays seven sols with the most recent sol corresponding to about 7 days behind the current actual Earth Day. 
        * Martian Day displays the Martian Sol for the weather information being displayed. 
        * High Temp: Displays the high temperature recorded from the NASA InSight API in Celsius. 
        * Low Temp: Displays the low temperature recorded from the NASA InSight API in Celsius. 
    3. The Martian will see a task card to record a task. 
        * The Task Title is required in order to save the task. For Example: "*Eat Mars Bars*"
        * The Task Body is provided for more description. For Example: "*Because chocolate will help you stay alert.*"
        * Once the Martian clicks "Save", a modal will confirm the task is saved. 

           




### Test Users
* These Martians are already registered if the User would like to test the application without creating a new Martian. 

**Test User 1**

    * Martian Name: Mr. Martian XLF-12
    * Email: Mars.Rocks@email.com
    * Password: p@ssw0Rd

**Test User 1**

    * Martian Name: Ms. Martian XLF-15
    * Email: Martians.Rocks@email.com
    * Password: p@ssw0Rd