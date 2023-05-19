### MongoDb -

MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables. 

The MongoDB database is developed and managed by MongoDB.Inc under SSPL(Server Side Public License) and initially released in February 2009. It also provides official driver support for all the popular languages like C, C++, C#, and .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. 
## Document Database -

A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

### A MongoDB document- 
The advantages of using documents are:

Documents correspond to native data types in many programming languages.

Embedded documents and arrays reduce need for expensive joins.

Dynamic schema supports fluent polymorphism.

### RDBMS vs MongoDB:

--> RDBMS has a typical schema design that shows number of tables and the relationship between these tables whereas MongoDB is document-oriented. There is no concept of schema or relationship.
--> Complex transactions are not supported in MongoDB because complex join operations are not available.
--> MongoDB allows a highly flexible and scalable document structure. For example, one data document of a collection in MongoDB can have two fields whereas the other document in the same collection can have four.
--> MongoDB is faster as compared to RDBMS due to efficient indexing and storage techniques.
T--> There are a few terms that are related in both databases. What’s called Table in RDBMS is called a Collection in MongoDB. Similarly, a Row is called a Document and a Column is called a Field. MongoDB provides a default ‘_id’ (if not provided explicitly) which is a 12-byte hexadecimal number that assures the uniqueness of every document. It is similar to the Primary key in RDBMS.

### Features of MongoDB:

## Document Oriented:
 MongoDB stores the main subject in the minimal number of documents and not by breaking it up into multiple relational structures like RDBMS. For example, it stores all the information of a computer in a single document called Computer and not in distinct relational structures like CPU, RAM, Hard disk, etc.
## Indexing: 
Without indexing, a database would have to scan every document of a collection to select those that match the query which would be inefficient. So, for efficient searching Indexing is a must and MongoDB uses it to process huge volumes of data in very less time.

## Scalability:
 MongoDB scales horizontally using sharding (partitioning data across various servers). Data is partitioned into data chunks using the shard key, and these data chunks are evenly distributed across shards that reside across many physical servers. Also, new machines can be added to a running database.

## Replication and High Availability:
 MongoDB increases the data availability with multiple copies of data on different servers. By providing redundancy, it protects the database from hardware failures. If one server goes down, the data can be retrieved easily from other active servers which also had the data stored on them.

## Aggregation: 
Aggregation operations process data records and return the computed results. It is similar to the GROUPBY clause in SQL. A few aggregation expressions are sum, avg, min, max, etc

### Where do we use MongoDB?

MongoDB is preferred over RDBMS in the following scenarios:

### Big Data: 
If you have huge amount of data to be stored in tables, think of MongoDB before RDBMS databases. MongoDB has built-in solution for partitioning and sharding your database.

### Unstable Schema: 
Adding a new column in RDBMS is hard whereas MongoDB is schema-less. Adding a new field does not effect old documents and will be very easy.

### Distributed data :
Since multiple copies of data are stored across different servers, recovery of data is instant and safe even if there is a hardware failure.

## DataTypes in MongoDB -
String
Number
Boolean 
Array
Buffer
Date
ObjectId 
Mixed
UUID
BigInt

## Mongoose -

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

Object Mapping between Node and MongoDB managed via Mongoose.

### Terminologies-
1. Collections
‘Collections’ in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

2. Documents
‘Documents’ are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

3. Fields
‘Fields’ or attributes are similar to columns in a SQL table.

4. Schema
While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

5. Models
‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

 ### Mongoose Schema vs. Model-
A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

1. Referencing Mongoose
let mongoose = require('mongoose');

2. Defining the Schema

let emailSchema = new mongoose.Schema({
  email: String
})

3.  Exporting a Model-
We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.

module.exports = mongoose.model('Email', emailSchema);

Query Building
Mongoose has a very rich API that handles many complex operations supported by MongoDB. Consider a query where we can incrementally build query components.

In this example, we are going to:

1. Find all users
2. Skip the first 100 records
3. Limit the results to 10 records
4. Sort the results by the firstName field
5. Select the firstName
6. Execute that query 

UserModel.find()                   // find all users
         .skip(100)                // skip the first 100 items
         .limit(10)                // limit to 10 items
         .sort({firstName: 1}      // sort ascending by firstName
         .select({firstName: true} // select firstName only
         .exec()                   // execute the query
         .then(docs => {
            console.log(docs)
          })
         .catch(err => {
            console.error(err)
          })
;

## Mongoose Queries - 
 Mongoose Queries are different static helper functions to carry out CRUD (Create Read Update and Delete) operations which are very important for any database. The static helper functions return a mongoose query object. The mongoose query is carried out first asynchronously and then calls the callback function passed to it. An alternative way is to use the synchronous function which is responsible for executing the query.

 ## Queries - The following are different Queries:

### Model.deleteMany(): 
This query takes the parameters of any field that matches and then deletes all the entries in the database that matches.
### Model.deleteOne():  
This query takes the parameters of any field that matches and then deletes any one of the entries in the database that matches.
### Model.find(): 
This query takes the parameters of one or more fields that match and then returns all the entries in the database that matches.
### Model.findById(): 
This query takes the id as the parameter and then returns the entry in the database if it exists matches.
### Model.findByIdAndDelete(): 
This query takes the id as the parameter and then deletes the entry in the database if it exists matches.
### Model.findByIdAndRemove(): 
This query takes the id as the parameter and then removes the entry in the database if it exists and then returns it to the callback function.
### Model.findByIdAndUpdate(): 
This query takes the id and the update parameters and values as the parameter and then updates the entry in the database if it exists.
### Model.findOne(): 
This query takes the parameters of any field that matches and then returns any one of the entries in the database that matches.
### Model.findOneAndDelete(): 
This query takes the parameters of any field that matches and then returns and deletes any one of the entries in the database that matches.
### Model.findOneAndRemove(): 
This query takes the parameters of any field that matches and then returns and removes any one of the entries in the database that matches.
### Model.findOneAndReplace(): 
This query takes the parameters of any field and the replace document and then replaces any one of the entries in the database that matches.
### Model.findOneAndUpdate(): 
This query takes the parameters of one or more fields and the updated fields and values and then updates any one of the entries in the database that matches.
### Model.replaceOne(): 
This query takes the parameters as a filter and the replacement document and then replaces any one of the entries in the database that matches.
### Model.updateMany(): 
This query takes the parameters as a filter and the updating fields and values and then updates all of the entries in the database that matches.
### Model.updateOne(): 
This query takes the parameters as a filter and the updating fields and values and then updates any one of the entries in the database that matches.