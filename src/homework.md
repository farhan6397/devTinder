- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to the port 
- Write request handlers for /test
- Install nodemon and src/app.js
- What are dependencies
- What is different between carret( ^ ) and tilde ( ~ )
- What is the use of -g while npm installing

....................................................................

- .gitinore
- play with routes
- postman
- explore routing and use of ?, +, (), * in the routes
- use of regex in the routes /a/, /.*fly$/
- Reading the query params in the routes

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

- multiple routes handlers - play with code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5);
- what is middleware ? why do we need it.
- diff b/w app.use() and app.all()
- Error handling using app.use("/", (err, req, res, next) => {});

# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

- Create a free cluster on MongoDB official website (Mongo Atlas)
- install mongoose library
- Connect your Application to the Database "Connection-url"/devTinder
- call the connectDB function and connect to database before starting application on 7777
- create a user schema and user model
- Create post /signup Api to add data to database
- push some documensts using Api calls from postman
- Error handling using try and catch

# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

- js object vs json
- add the express.json middleware to your app
- make your signup Api dynamic to recieve data from the end user
- User.findOne() with duplicate email ids, which object returned
- API - get user by gmail
- API - feed Api - Get /feed -get all the users from th database

# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

