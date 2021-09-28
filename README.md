## [Click here for Live Demo of Tinder clone app](https://tinder-clone-73e21.web.app)

- **Disclaimer:** The application does not contain or suggest the internal implementation of tinder.
  And, it has been design and devloped for the educational purpose during the off office hours.
  and has no links with real app.

## Process of developing application:

**Implemented a Tinder Clone application with MERN Stack (MongoDB, Express, React, Node JS)**

- Back-End:

  - Database: MongoDB
  - Back-end JS framework: NodeJS
  - Server side: Express JS
  - Connect to MongoDB use Mongooes

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
- **Deploy app back-end(node.js) on heroku, front-end on firebase**
- **Heroku**, create new app, go to backend terminal config the HEROKU, create `.gitignore` write in `node_modules`
- check logs after push: `heroku logs --tail`, then go setting you will see the link.
- copy that link then go `axios.js`,
- **Firebase**, if you don't have then install using `npm i -g firebase-tools` command
- `firebase login` then `firebase init` -> hosting, use existing project
- (public): `build`
- `npm run build` create production build, if make any changes in app you have run this again
- `firebase deploy`

## Tinder System Design requirement :

- Below are the following possible requirement:

  - Storing profiles
  - Recommendations
  - Nothing matches and chatting with matches
  - Storing profiles is trivial except for the image storage

- The distributed file architecture seems best when storing images.

- Direct Messaging or chatting with matches can be done:

  - Using the `XMPP protocol`, which uses web sockets to have peer to peer communications between client and server.
  - Each connection is build over `TCP`, ensuring that the connection is maintained.
  - The session micro service can send messages to the receiver based on connection to user mappings.

- Our system should be decoupled as much as possible:

  - we try to maintain accept and reject information on the client. On swiping left or right.
  - the client can note the action and avoid showing the same user again and again perhaps using bloom filters.

- The server should have a validation engine called the `matcher micro service`, which notes matches and allows or disallows chat between two users.

- The final requirement of recommendations. needs `city wise partitioning` on the user data
