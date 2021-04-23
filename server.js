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
app.use('/uploads', express.static('./uploads')); // make uploads folder a static file to  be accessed publicly


// Routes are represented as URIs in REST APIs.

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Chuong, your TeaApi App is listening on port  ${listener.address().port}`)
})

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);