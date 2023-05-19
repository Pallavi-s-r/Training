## What Is Express JS -

Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

It's a layer built on the top of the Node js that helps manage servers and routes.

## Why Express JS -

Express was created to make APIs and web applications with ease,
It saves a lot of coding time almost by half and still makes web and 
mobile applications are efficient.
Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous
knowledge of any language. Express lets so many new developers enter the field of web development.

### The reason behind creating an express framework for node js is:

Time-efficient
Fast 
Economical
Easy to learn
Asynchronous


## Features of Express JS - 

Fast Server-Side Development 
The features of node js help express saving a lot of time.

Middleware
Middleware is a request handler that has access to the application's request-response cycle.

Routing 
It refers to how an application's endpoint's URLs respond to client requests.

Templating 
It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.

Debugging 
Express makes it easier as it identifies the exact part where bugs are.

### Advantages of Using Express With Node.js -

Express is Unopinionated, and we can customize it.
For request handling, we can use Middleware.
A single language is used for frontend and backend development.
Express is fast to link it with databases like MySQL, MongoDB, etc.
​​Express allows dynamic rendering of HTML Pages based on passing arguments to templates.


### Limitations of Express JS -

Sometimes, there is no structural way to organize things, and the code becomes non-understandable.
There are so many issues with callbacks.
The error messages that will come are challenging to understand.

## Companies That Are Using Express JS
 Netflix 
 IBM 
 ebay
 Uber


## JWT - 

JWT is a JSON Web Token that is used to transfer data to someone over the internet with encryption. This helps to maintain the secrecy between the two parties.

JSON Web Token (JWT) is an open standard that provides a compressed and independent method for secure data transfer among parties as a JSON object. 
It can be used for information exchange and is commonly used for authentication systems.
JWT is widely used for HTTP-based authentication and authorization. These tokens can be used as login information to give access to the server.
The size of JWT is very compact and can be transmitted by an HTTP header, POST parameter, or URL. Also, because of its size, its transmission is fast.
JWT requires user information in the self-contained Payload not to contact the Database repeatedly.

### JSON Web Token Structure -

JWTs contain three sections that are separated by dots (.), which are as follows:

Header: The header typically consists of two parts, and JWT is the type of token that uses a signing algorithm, such as HMAC SHA256 or RSA.
Payload: The second one is Payload. It is a statement in which Claims are assertions about an entity (usually the user) and other data. Claims can be classified as registered, public, or private. The Payload contains the JSON object or the claim.
Signature: A signature is a cryptographic algorithm used to verify the integrity of the JSON payload. To create a signature, you must sign the encoded header, encoded Payload, secret, and algorithm indicated in the header and mark that.

### JWT Use Cases
Authorization - This is the most common structure for using JWT. When registered, the user can access routes, services, and resources authorized with that token by including the JWT in subsequent requests.
Information Exchange - With the help of JSON Web Tokens, you can securely transmit information between parties.

## Middleware
