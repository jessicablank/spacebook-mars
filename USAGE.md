# Usage

- **Sign-Up Page**

  New users must create a Martian profile to use the app.

  - Martian Name
    - Any combination of letters, numbers, characters, and spaces
  - Email
    - Must follow standard email@domain.com
  - Password
    - Any combination of letters, numbers, characters, and spaces

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
- **Tasks Page**
  - The Martian will see a card to quickly add a new task. Upon **save**, task will be added to the bottom of the task list below.
  - The task list allows the Martian to see previously added tasks with the oldest tasks displaying first.
    - These tasks are specific to each user. 
    - The Martian can click on the title of a task to see a modal with the task body.
    - The Martian can delete the task by clicking the **X**.
- **Rover Page**
    -   The Martian will see up to three images from the Curiosity Rover that correspond to the approximate date displayed on the **Profile** page.
