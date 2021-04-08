# Express Back-End with React Front-End

## Git Worflow

- [Git Worflow](./git_workflow.md)

## Create project folder

 `mkidr awesome-project`

## Install The Back-End

* `npx express-generator --no-view backend-folder-name`
* cd final-project-name && npm install
* edit bin/www and change the port to 3001
* add console.log to onListening and add a start script
* create .gitignore
* git init
* install nodemon:

 `npm install nodemon --save-dev`
* add 'dev' script to start nodemon with `npm run dev`

## Additonal useful middleware

* dotenv

## Create the database

 `createdb final_project_name -O labber`

## configure DB Connection

### Create .env

 `npm i -D dotenv`
* create `.env` file with the following

``` js
DB_HOST = localhost
DB_USER = labber
DB_PASS = labber
DB_NAME = final_project
DB_PORT = 5432
```

* install 'pg'

 `npm i pg`
* create `db/index.js`

``` js
const pg = require('pg');
require('dotenv').config();

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable` ;

const client = new pg.Client({
    connectionString: connectionString || process.env.DATABASE_URL,
});

console.log( `Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}` );
client.connect();

module.exports = client;
```

* import `db/index` in app

 `const db = require('./db');`

### Create the Schema

* create `db/schema/01_users.sql`
* create `db/schema/02_posts.sql`

``` js
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

``` js
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id)
);
```

### Create the Seeds

* create `db/seeds/01_users.sql`
* create `db/seeds/02_posts.sql`

``` js
INSERT INTO
users(first_name, last_name, email, password)
VALUES
    ('Mario', 'Bros', 'mario@nintendo.com', 'test'),
    ('Luigi', 'Bros', 'luigi@nintendo.com', 'test'),
    (
        'Princess',
        'Peach',
        'peach@nintendo.com',
        'test'
    ),
    (
        'Princess',
        'Daisy',
        'daisy@nintendo.com',
        'test'
    ),
    ('Donkey', 'Kong', 'donkey@nintendo.com', 'test');
```

``` js
INSERT INTO
posts(title, content, user_id)
VALUES
    (
        'Hey! Come back here! You big-a monkey!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        1
    ),
    (
        'Nice of the princess to invite us over a picnic, eh Luigi?',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        1
    ),
    (
        'I wanna be a great plumber like my brother Mario.',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        2
    ),
    (
        'Luigi, Luigi! Oh yeah! Oh yeah!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        2
    ),
    (
        'Did you see Toad and Chao and the sand?',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        3
    ),
    (
        'Aw, brutal!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        3
    ),
    (
        'Whoo-hoo! Yippee!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        4
    ),
    (
        'Aww, sweet! I did it, yay!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        4
    ),
    (
        'Banana slamma!!',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        5
    ),
    (
        'Help, Diddy! I ve fallen, and I can t get up! Can you pass me a banana, little buddy?',
        'In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.',
        5
    );
```

### Add DB Reset

 `npm i pg-native`
* create `db/reset`

``` js
// load .env data into process.env
require('dotenv').config();

// other dependencies
const fs = require('fs');
const chalk = require('chalk');
const Client = require('pg-native');

// PG connection setup
const connectionString =
    process.env.DATABASE_URL ||
`postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable` ;
const client = new Client();

// Loads the schema files from db/schema
const runSchemaFiles = function() {
    console.log(chalk.cyan( `-> Loading Schema Files ...` ));
    const schemaFilenames = fs.readdirSync('./db/schema');

    for (const fn of schemaFilenames) {
        const sql = fs.readFileSync( `./db/schema/${fn}` , 'utf8');
        console.log( `\t-> Running ${chalk.green(fn)}` );
        client.querySync(sql);
    }
};

const runSeedFiles = function() {
    console.log(chalk.cyan( `-> Loading Seeds ...` ));
    const schemaFilenames = fs.readdirSync('./db/seeds');

    for (const fn of schemaFilenames) {
        const sql = fs.readFileSync( `./db/seeds/${fn}` , 'utf8');
        console.log( `\t-> Running ${chalk.green(fn)}` );
        client.querySync(sql);
    }
};

try {
    console.log( `-> Connecting to PG using ${connectionString} ...` );
    client.connectSync(connectionString);
    runSchemaFiles();
    runSeedFiles();
    client.end();
} catch (err) {
    console.error(chalk.red( `Failed due to error: ${err}` ));
    client.end();
}
```

* add `db:reset` to package.json in the scripts section

 `"db:reset": "node ./db/reset.js"`

## configure routing and helpers

### db Helpers

* Create `dbHelpers.js` in a `helpers` folder

* Create a module in dbHelpers.js

* create `getUsers` to get the list of the users

``` js
module.exports = (db) => {
    const getUsers = () => {
        const query = {
            text: 'SELECT * FROM users',
        };

        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };

    const getUserByEmail = email => {

        const query = {
            text: `SELECT * FROM users WHERE email = $1` ,
            values: [email]
        }

        return db
            .query(query)
            .then(result => result.rows[0])
            .catch((err) => err);
    }

    const addUser = (firstName, lastName, email, password) => {
        const query = {
            text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
            values: [firstName, lastName, email, password]
        }

        return db.query(query)
            .then(result => result.rows[0])
            .catch(err => err);
    }

    const getUsersPosts = () => {
        const query = {
            text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
        FROM users
        INNER JOIN posts
        ON users.id = posts.user_id`
        }

        return db.query(query)
            .then(result => result.rows)
            .catch(err => err);

    }

    return {
        getUsers,
        getUserByEmail,
        addUser,
        getUsersPosts
    };
};
```

* Add the require at the top of the server

 `const dbHelpers = require('./helpers/dbHelpers')(db);`

### Change The Router

* change the app.use

 `app.use('/api/users', usersRouter(dbHelpers));`
* use the following in the users router

``` js
const express = require('express');
const router = express.Router();
const {
    getPostsByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/posts', (req, res) => {
        getUsersPosts()
            .then((usersPosts) => {
                const formattedPosts = getPostsByUsers(usersPosts);
                res.json(formattedPosts);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.post('/', (req, res) => {

        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};
```

## dataHelpers

You might need to reformat the output of the queries for easier manipulation from the front-end.

* create `helpers/dataHelpers`

``` js
const getPostsByUsers = (usersPosts) => {
    const postsByUsers = {};

    for (let post of usersPosts) {
        if (!postsByUsers[post.user_id]) {
            postsByUsers[post.user_id] = {
                userId: post.user_id,
                firstName: post.first_name,
                lastName: post.last_name,
                email: post.email,
                posts: [],
            };
        }

        postsByUsers[post.user_id].posts.push({
            title: post.title,
            content: post.content,
        });

    }

    return Object.values(postsByUsers);
};

module.exports = {
    getPostsByUsers,
};
```

## Install the Front-End


At the root of the project folder, type the following:

 `npx create-react-app client`
(make sure you have node 8.12.0 or above)

Install Axios

 `npm install axios`
Create a `useEffect` hook to load the users

``` js
import {
    useEffect,
    useReducer
} from 'react';
import dataReducer, {
    SET_USERS
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
    const [state, dispatch] = useReducer(dataReducer, {
        users: [],
        loading: true,
    });
    useEffect(() => {
        axios({
                method: 'GET',
                url: '/api/users',
            })
            .then(({
                data
            }) => {
                console.log(data);
                dispatch({
                    type: SET_USERS,
                    users: data
                });
            })
            .catch((err) => console.log(err));
    }, []);

    return {
        state,
        dispatch,
    };
};

export default useApplicationData;
```

Create a `Reducer` fct to update the state

``` js
export const SET_USERS = 'SET_USERS';

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;
```

Display the list of users in App

``` sh
const App = () => {
    const {
        state,
        dispatch
    } = useApplicationData();
      const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));
  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>
  </div >
  );
};
```

To use Sass, install node-sass

 `npm i node-sass`

## Ports

* React front-end is running on port 3000
* Rails back-end is running on port 3001 (or any other)

## Cors

**Cross-Origin Resource Sharing**

* A web application makes a cross-origin HTTP request when it requests a resource that has a different domain (i.e. different ports)
* Web application using APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.

## Proxy API Calls on The Client

Add a proxy to package.json:

``` js
{
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "proxy": "http://localhost:3001",
    ...
```

## References

[Create React App with an Express Backend](https://daveceddia.com/create-react-app-express-backend/)

[Access-Control-Allow-Origin: Dealing with CORS Errors in React and Express](https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/)

[Deploy React and Express to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/)
