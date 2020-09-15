## Task API EndPoints - How to Test in Postman

Before testing any routes:
- Ensure app is running on local host and user is logged in. 
- First copy the log-in token from browser local storage. This ensures the tasks are specific to the logged-in user. This token expires after 24 hours. 
- Set *Authorization* tab to *TYPE: Bearer Token* and Paste the copied token.
- Set *Body* tab to *x-www-form-urlencoded*.
- Here is an example of getting the token from local storage in Chrome:

![Bearer Token in Chrome Local Storage](./assets/spacebook-user-token.png)

 **POST** http://localhost:3001/api/task
- In the *Body* tab
    - Set *KEY* to "title" and "textBody".
    - Set *VALUE* to your desired task.
- Press *Send*.
- Example Response:
```
{
    {
    "_id": "5f5fe46c8ad84420ec994d68",
    "title": "Feed Fish",
    "textBody": "One half cup every sol night. ",
    "martianID": "5f43e93d07f6df2f20d21d72",
    "date": "2020-09-14T21:45:16.730Z",
    "__v": 0
}
```

**GET** http://localhost:3001/api/task
- Press *Send*.
- Example Response: 
```
[
    {
        "_id": "5f57c2f642dd173744d5fec6",
        "title": "Check potatoes",
        "textBody": "Planted seedlings yesterday.",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-08T17:44:22.370Z",
        "__v": 0
    },
    {
        "_id": "5f5aeff646d26e44e4fd3c56",
        "title": "Weight Training ",
        "textBody": "Meet up with Beta team to train. ",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-11T03:33:10.776Z",
        "__v": 0
    },
    {
        "_id": "5f5fe46c8ad84420ec994d68",
        "title": "Feed Fish",
        "textBody": "One half cup every sol night. ",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-14T21:45:16.730Z",
        "__v": 0
    }
]
```

 **DELETE** http://localhost:3001/api/task/+id

- Copy & Paste the task _id desired to delete to the end of the API file route.
- For Example, to delete "Feed Fish" task from above, the route is `http://localhost:3001/api/task/5f5fe46c8ad84420ec994d68`
- Press *Send*.
- Example Response: 
```{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}
```
- Confirm the task was deleted by repeating the **GET** route test. 
- Following the Example above, the **GET** request shows "Feed Fish" is no longer a task:
[
    {
        "_id": "5f57c2f642dd173744d5fec6",
        "title": "Check potatoes",
        "textBody": "Planted seedlings yesterday.",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-08T17:44:22.370Z",
        "__v": 0
    },
    {
        "_id": "5f5aeff646d26e44e4fd3c56",
        "title": "Weight Training ",
        "textBody": "Meet up with Beta team to train. ",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-11T03:33:10.776Z",
        "__v": 0
    },
]

**PUT** http://localhost:3001/api/task/+id
- Copy & Paste the task _id desired to edit to the end of the API file route.
- For Example, to edit "Weight Training" task from above, the route is `http://localhost:3001/api/task/5f5aeff646d26e44e4fd3c56`
- In the *Body* tab
    - Set *KEY* to "title" and "textBody".
    - Update *VALUE* to your desired task.
- Press *Send*. 
- Example Response:
```
{
    "_id": "5f5aeff646d26e44e4fd3c56",
    "title": "Cardio Training",
    "textBody": "Meet up with Beta team to train.",
    "martianID": "5f43e93d07f6df2f20d21d72",
    "date": "2020-09-11T03:33:10.776Z",
    "__v": 0
}
```
- Confirm the task was updated by repeating the **GET** route test. 
- Following our example, the **GET** response is now:
[
    {
        "_id": "5f57c2f642dd173744d5fec6",
        "title": "Check potatoes",
        "textBody": "Planted seedlings yesterday.",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-08T17:44:22.370Z",
        "__v": 0
    },
   {
        "_id": "5f5aeff646d26e44e4fd3c56",
        "title": "Cardio Training",
        "textBody": "Meet up with Beta team to train.",
        "martianID": "5f43e93d07f6df2f20d21d72",
        "date": "2020-09-11T03:33:10.776Z",
        "__v": 0
    },
]