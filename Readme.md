## MERN STACK - 

MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily. 

### MERN Stack Full Form-

MERN Stack is a compilation of four different technologies that work together to develop dynamic web apps and websites. 

It is a contraction for four different technologies as mentioned below:

### M - MongoDB
### E - ExpressJS
### R - ReactJS
### N - NodeJS

### CREATE A BACKEND PROJECT -

Considering you’ve downloaded and configured all the four aforementioned technologies, you need to know how to create a new project folder to get started with the MERN stack. Next, you need to open the folder on the CMD (or terminal) and enter the following command to initialize a package.json file:

## npm init

### Installing  Node Modules - 
npm install module-name --save

### MERN Stack Components-

There are four components of the MERN stack. Let’s discuss each of them one by one. 

The first component is MongoDB, which is a NoSQL database management system. 
The second MERN stack component is ExpressJS. It is a backend web application framework for NodeJS.
The third component is ReactJS, a JavaScript library for developing UIs based on UI components. 
The final component of the MERN stack is NodeJS. It is a JS runtime environment, i.e., it enables running JavaScript code outside the browser. 

## Node.js - 

---> Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

---> Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.


## Similarities between Node.js and Browser side JS -

---> Both have a single thread for running JavaScript
---> Both use the Event Queue (Lookup Event loop for further details)
---> Both are non-blocking
---> Both have sync and asyn capabilities
---> Both use exceptions, flow, and scoping identically.

## Difference between Node,js and Browser -

1. Node vs Browser JS Globals -
Node has access to some common JS globals like console, setTimeOut, etc., and other Node-specific globals like process, require and __dirname.

JS in the browser has access to common JS globals as well, and some browser-specific ones like location, window, and document queries.

2. Node vs Browser JS Execution -
NodeJS is a runtime to run JS scripts locally. NodeJS runs code on your local machine, and has access to everything a regular programming language has. It's no different to running C code or BASH scripts on your machine.

Running JS on your browser is very different to running it on Node. It runs in a sandbox in your browser with very limited access to your computer's resources. It has no access to your local filesystem, and can't run commands locally. However, you have access to the DOM and limited access to the browser's state.


## Key Differences Between JavaScript vs Node JS -

--> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

--> JavaScript is generally used for any client-side activity for one web application. An action can address business validation or dynamic page display in some scheduled time interval or essential Ajax call task. Those are used for a maximum time for any web application. Node JS is mainly used for accessing or running any operating system for non-blocking operations. An operation like creating or executing a shell script, getting specific hardware-related information on one call, installing certificate details in the design, or many define tasks is non-blocking on an operating system.

--> JavaScript runs in any engine, like Spider Monkey (Firefox), JavaScript Core (Safari), and V8 (Google Chrome). So JavaScript programming is trying to write; any running environment means a good browser. Whereas Node JS only supports the V8 engine, which googles chrome is specific. But whether it endorses the V8 engine, written JavaScript code can run in any environment. So there has no browser-specific constraint on it.

--> JavaScript is typically following Java Programming language standards. There may be some different ways of writing code, but at the same time, we can say it follows the Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.

--> For accessing any operating system, specific non-blocking task JavaScript has some particular object, but all are operating systems clear. An example is ActiveX Control which is only running in Windows. But Node JS is given the utility to run some operating system-specific non-blocking tasks from any JavaScript programming. It doesn’t have any operating system-specific constant. Node JS is very much familiar with creating a specific binding with the file system and allows the developer to read or sometimes write on disk.

## The Benefits and Drawbacks of Node.js
The following are some of the benefits and drawbacks of Node.js:

### Benefits -

1. JS is an MIT-licensed accessible framework.

2. It is a lightweight framework with only the most essential modules. Other components may be added based on the demands of the application.

3. It is a multi-platform framework that runs on Windows, Mac OS X, and Linux.

4. The JavaScript programming language is used to create server-side apps.

5. Any form of data in js applications was never buffered. Data is output in chunks by Node.js apps. The Node.js library's Interfaces are all reactive or non-blocking. Node.js host never awaits data from such an API. It is now crystal clear to us. The server moves on to the following API after calling one, and a Node.js notification mechanism helps the server receive a response from the previous API request.

6. JS is a fast-execution programming library based on the V8 JavaScript Engine.


### Drawbacks -

1. One of Node.js' significant drawbacks is its lack of consistency. The API frequently changes, which causes challenges for developers because they'll have to make adjustments to their existing code base to stay compatible.

2. It does not enable multi-threading programming and is unsuitable for creating high-performance computing applications.

3. Unlike other programming languages, JavaScript does not have a comprehensive and functioning library framework. As a result, users are forced to use a shared library to execute tasks like image analysis, XML processing, Entity mapping, and database operations. It makes it difficult for developers to use Node.js for simple programming tasks.

## V8 JavaScript Engine -

--> V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

--> V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

--> The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

## NPM -

NPM (Node Package Manager) is the default package manager for Node.js and is written entirely in Javascript. Developed by Isaac Z. Schlueter, it was initially released in January 12, 2010. 

NPM manages all the packages and modules for Node.js and consists of command line client npm. It gets installed into the system with installation of Node.js. The required packages and modules in Node project are installed using NPM.

A package contains all the files needed for a module and modules are the JavaScript libraries that can be included in Node project according to the requirement of the project.

NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

As npm is a global package, -g flag is used to update it globally.

## Creating a Node Project:

To create a Node project, npm init is used in the folder in which user want to create project. The npm command line will ask a number of questions like name, license, scripts, description, author, keywords, version, main file etc. After npm is done creating the project, a package.json file will be visible in project folder as a proof that the project has been initialized.

## Note: 
NPM installs the dependencies in local mode (Default) which go to the node_modules directory present in the folder of Node application.

Using Semantic Versioning to manage packages:
versioning major(major changes break the api) , minor(minor changes don't break the api)  and patch(bug fixes) explanation - 4.7.6


### Some facts about NPM:

--> npm is open source
--> The top npm packages in the decreasing order are: lodash, async, react, request, express.
-->Installing NPM:
To install NPM, it is required to install Node.js as NPM gets installed with Node.js automatically.
Install Node.js.

# Index.js file discription - 

1.
const express = require('express');
const bodyParser = require('body-parser');


These lines import the required dependencies for the server. `express` is the framework used for building the server, and `body-parser` is a middleware used to parse the request body.

2.
const app = express();

This line creates an instance of the Express application.

3.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

These lines configure the Express application to use `body-parser` middleware. The `bodyParser.json()` middleware is used to parse JSON data in the request body, and `bodyParser.urlencoded({extended:true})` is used to parse URL-encoded data.

4.
console.log("hello, this is first server"); 

This line simply logs a message to the console indicating that the server is running.

5.
app.get('/hello' , function(req,res,next){
    res.send({msg:"route present in index.js file"});
    next();
})

This code sets up a route for the `GET` request to `/hello`. When a request is made to this route, it sends a JSON response `{msg:"route present in index.js file"}` and calls the `next()` function to pass the request to the next middleware.

6.
app.use('/hii', (req,res)=>{
    res.send("working of app.use");
})

This code sets up a middleware for requests with a path starting with `/hii`. When a request matches this path, it sends a response with the message "working of app.use".

7.
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

This line starts the server and listens on the specified port. It uses the value of the environment variable `PORT` if available, otherwise it defaults to port 3000. It also logs a message to the console indicating the port on which the server is running.