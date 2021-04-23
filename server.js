require('dotenv').config();
const express = require('express'); 
const routes = require('./routes/tea'); 
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
app.use(helmet());
app.use(compression()); //Compress all routes

app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/', routes); //to use the routes

// Make index.html static, allows the API to access it when the server starts.
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});
// Make uploads folder a static file to  be accessed publicly
app.use('/uploads', express.static('./uploads')); 


// Routes are represented as URIs in REST APIs.

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Chuong, your TeaApi App is listening on port  ${listener.address().port}`)
})

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    { 
        useFindAndModify: false, 
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useCreateIndex: true,
        // prevents heroku from returning a timeout error 503
        server: { 
            socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
         }, 
         replset: {
            socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } 
         }
         
    },
    function (err) {
        if (err) return console.log("Error: ", err);
        console.log(
          "MongoDB Connection -- Ready state is:",
          mongoose.connection.readyState
        );
      }
    );