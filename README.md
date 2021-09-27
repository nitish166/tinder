## Process of developing application:

**Implemented a Tinder Clone application with MERN Stack (MongoDB, Express, React, Node JS)**

- Front-End:
  - deploying it into firebase to host front end
- `npx create-react-app tinder`
- add project in firebase "tinder"
- `cd tinder`, then `npm-start`
- do the clenup i.e delete 'App.test.js', 'logo.svg', 'setupTest.js'
- go to **material-ui**
- open new terminal install `npm install @material-ui/core` and `npm install @material-ui/icons`
- search person, forum icon and import it in header
- `npm i react-tinder-card` after created TinderCards.js
- create Express server which connect to MongoDB, pull all data from there.
- create 'tinder-backend' in the same folder level as 'tinder'
- `cd tinder-backend` then `npm init`
- 'server.js' for entry point
- in created 'package.json' backend stuff like import is ES6, to get that in node.js under "main:" add `"type": "module",`
- under "test:" add `"start": "node server.js"` then create `server.js`
- install all dependencies, `npm i express mongooes` or `npm install express mongoose`
- go to MongoDB, build a new project
- terminal `cd tinder-backend` then `npm i -g nodemon`
- `nodemon server.js`, then go to `localhost:8001`, now you have API endpoint, then connect to DB
  - Back to MongoDB -> DB Access -> Add new DB user -> create user name and pw (save yourself) -> Add User
  - Network Access -> Add IP Address to allow list -> Allow access from anywhere -> confirm
  - go Clusters -> CONNECT -> Connect your application -> you get url to connect to DB -> fill "\<pw>" and "\<db>" name
  - Create database schema -> "dbCards.js"
  - add Middlewares in `server.js`
  - `npm i cors` cors is adding headers to every request, a security prerequisite when you have things deployed online
  - added cors and `nodemon server.js` again
  - open [postman](https://www.postman.com/) (interact with servers backend stuff) in local to check our API if they are working correctly - get new "+" tab, and type the `http://localhost:8001/` and `http://localhost:8001/tinder/cards` - post `http://localhost:8001/tinder/cards` -> body -> raw -> JSON - add below:

```
    [
    {
    "name": "Elon Musk",
    "imgUrl":
    "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    },
    {
    "name": "Jeff Bezoz",
    "imgUrl":
    "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
    }
    ]

```

```
    [
    {
    "name": "Elizabeth Olsen",
    "imgUrl":
    "https://www.gstatic.com/tv/thumb/persons/620481/620481_v9_bb.jpg"
    },
    {
    "name": "Scarlett Johansson",
    "imgUrl":
    "https://pm1.narvii.com/6310/c0e449205abaa82b4c37b3baf0e77ab95fe13137_00.jpg"
    },
    {
    "name": "Gal Gadot",
    "imgUrl":
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg"
    }
    ]
```

- set GET to `http://localhost:8001/tinder/cards` again and check in postman, we get the things we just post
- Hook up to front-end, go to front-end terminal and stop it then `npm i axios`, then `npm start`
- After that go MongoDB and check collections, all data are there

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
