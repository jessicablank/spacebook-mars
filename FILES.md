# File Structure

```
├── client
    ├── package-lock.json
    ├── package.json
    ├── public
|  |  ├── favicon.ico
|  |  ├── index.html
|  |  └── manifest.json
|  ├── README.md
|  └── src
|     ├── App.js
|     ├── components
|     |  ├── Container.js
|     |  ├── DeleteBtn
|     |  |  ├── index.js
|     |  |  └── style.css
|     |  ├── Form
|     |  |  ├── index.js
|     |  |  └── taskCard.js
|     |  ├── List
|     |  |  ├── index.js
|     |  |  └── style.css
|     |  ├── LoadingIndicator
|     |  |  └── index.js
|     |  ├── LoginForm
|     |  |  ├── Form.js
|     |  |  ├── index.js
|     |  |  ├── InputGroup.js
|     |  |  └── LoginForm.css
|     |  ├── Modal
|     |  |  ├── LoginInfoModal.js
|     |  |  ├── Modal.js
|     |  |  ├── RoverModal.js
|     |  |  ├── style.css
|     |  |  ├── TaskInfoModal.js
|     |  |  ├── TaskModal.js
|     |  |  └── WeatherInfo.js
|     |  ├── Navbar
|     |  |  ├── index.js
|     |  |  ├── Navbar.css
|     |  |  └── Navbar.js
|     |  └── ProtectedRoute.js
|     ├── images
|     ├── index.css
|     ├── index.js
|     ├── logo.svg
|     ├── pages
|     |  ├── Forecast.js
|     |  ├── Home
|     |  |  ├── home.css
|     |  |  ├── index.js
|     |  |  └── logo.svg
|     |  ├── Login.js
|     |  ├── NoMatch.js
|     |  ├── Profile.js
|     |  ├── RoverPhotos.js
|     |  ├── Signup.js
|     |  ├── style.css
|     |  └── TaskPage.js
|     ├── registerServiceWorker.js
|     └── utils
|        ├── API.js
|        ├── auth
|        |  ├── AuthService.js
|        |  └── index.js
|        ├── insightAPI.js
|        ├── roverAPI.js
|        └── taskAPI.js
├── config
|  ├── auth.js
|  └── initDb.js
├── LICENSE
├── LOCALINSTALL.md
├── models
|  ├── index.js
|  ├── Task.js
|  └── User.js
├── package-lock.json
├── package.json
├── README.md
├── routes
|  ├── auth.js
|  ├── errorMiddleware.js
|  ├── taskAPI.js
|  └── users.js
├── server.js


```