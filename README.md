## Cause I love tea 🍵
#### So I built this API for the EvolveU-C6 project 1 🙋

#### ***Credit to Vitoria. Please check out her  [Article Page](https://lo-victoria.com/)*** 

**Our T-API User Stories**
* User can create a new tea object and add it to the database
* User can get all the tea from the database
* User can delete all the tea in the database
* User can get a single tea by querying its name
* User can post a comment to a single tea
* User can delete a single tea from the database


**Sample of tea obj:**☕

{
    "name": "Jasmine Tea",
    "image": "an image file url",
    "description": "Jasmine tea (茉莉花茶) is tea scented with the aroma of jasmine blossoms.",
    "keywords": "aromatic, china, sweet",
    "origin":"China",
    "brew time": 2,
    "temperature": 80,
    "comments": []
}

Routes     | HTTP Methods |	Description
-----------|--------------|-------------
/tea       | GET          |	Displays all tea
/tea       | POST         |	Creates a new tea
/tea       | DELETE       |	Deletes all tea
/tea/:name | GET          |	Displays a specific tea, given its name
/tea/:name | POST         |	Adds a comment to a specific tea, given its name
/tea/:name | DELETE       |	Deletes a specific tea, given its name

**A typical process of how Node.js handles HTTP transactions is as follows:**

1. Instantiate an HTTP server with a request handler function, and have it listen on a port.
2. Get headers, URL, method and body data from request objects.
3. Send headers, HTTP status codes and body data via response objects.
4. Pipe data from request objects and to response objects.
5. Handle errors in both the request and response streams.

***Controllers*** are typically callback functions that corresponds to the routers to handle requests. It is a good design principle to keep the code concise and readable.
// Syntax
*app.method('<path>', callbackFunction)*
 It is a convention to name the **controller** the same as the **route** which it is handling.

 ***Mongoose*** is an object data modeling (ODM) library for MongoDB. It allows us to efficiently create schemas for our MongoDB to use with ease.

 ***A schema*** defines the shape of the document which maps to a MongoDB collection. We then convert this schema into a Model, which we can then work with to manipulate it with our API.

 ***Multer*** is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.


### MOngoose METHODS:
[Mongoose Doc.](https://mongoosejs.com/docs/api.html#model_Model.findOne)


***.findOne();***
 To check whether an obj.name already exists in the database, we can use a mongoose query method called findOne(), which returns one object from the database that matches the condition supplied.

***getAllTea***
To get all tea, our function will retrieve and return all the data from our database using the mongoose built-in find() method. We supply {} as the matching condition so that the all data will be returned.

### NPM Helmet
[Security Check list] (https://lo-victoria.com/the-must-have-security-checklist-for-web-apps)
>Helmet helps you secure your Express apps by setting various HTTP headers. 
>It's not a silver bullet, but it can help!.


### NPM compression:
It can compress HTTP requests to significantly reduce the time required for the client to get and load the page from the server.