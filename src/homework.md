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
- API get user by id
- API - delete a user
- Diff b/w Put and Patch
- API - update a user
- explore mongoose documentations for model methods
- what are options in model methods
- API - update a user with email id

# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

- Explore schematype options from the documentations
- add reqired, unique, lowercase, min, minlength, trim,
- add default
- Create custom validate function for gender
- improve the database schema - Put all appropiate validations on each field in schema
- Add timestamps to the userSchema
- Add API level validation on patch request and signup post api
- DATA Sanitization - Add api validation for each field
- Install validator
- Explore validator library function and use validator function for password, email, photoUrl
- Never Trust - req.body

# ....................................................................

- validate data in signup Api
- Install bcrypt package
- Create a passwordHash using bcryp.hash and save the usere with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid

# ....................................................................

- install cookie-parser
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back 
- install jsonwebtoken
- In login API, after email and password validate, create a JWT token and send it to user in cookie
- read the cookies inside your profile API and find the logged in user
- userAuth middleware
-Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT and token and cookies to 7 days
- Create userSchema method to getJWT()
- Create userSchema method to comparePassword(password)