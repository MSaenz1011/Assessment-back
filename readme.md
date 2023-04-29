## **Assesment Back**

&nbsp;&nbsp;&nbsp;&nbsp; Technologies used for this proyect: - NodeJs - ExpressJs - CORS - Prisma - TypeScript - JSON Web Token

&nbsp;&nbsp;&nbsp;&nbsp;Secondly, the specific tasks present in the assessement are the following:

- **1. Project =>** A restful API that includes the following requirements:

  - Each user will have a unique id, and he will authenticate using a non-empty email and a password.
  - Each user will be able to save a list of favs. Each fav will have an title , description and link, and each list will be defined by a unique id and a name.
  - The system have to allow the following actions - Create a new list with a given name (auto-generate the unique id) - Get the users lists - Get an individual list for the user - Add items to a given list (based on the generated id) - All endpoints have to be secured with Bearer Auth (JWT) - Ensure that the password is strong enough
    <br /><br />

<br /> <br />

# **TASK #1**

## **What is this project?**

&nbsp;&nbsp;&nbsp;&nbsp;This is a small restful API Withe the following prompt:

- Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

- The CEO of Favs hired you to develop the initial version of his product. It’s worth mentioning that she does not have any technical background. However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.
  <br /> <br />

## **Usability**

Regards on the users behalf. Keep in mind that is a must to put a connection between Prisma and a the server by, it can be a container holder (Docker)
and/or a plattorm database for PostgreSQL (PgAdmin). Otherwise, proyect will not start.

### **Basic Commands**

      npm run dev //To initialize the server
      npx prisma studio //To enable Prisma Studio plattorm
      npm run prisma:seed //To fill the seeder with any info you want

 <br />

### **Endpoints**

| Route              | HTTP Verb | Route Middleware | Description                          |
| ------------------ | --------- | ---------------- | ------------------------------------ |
| /api/healthcheck   | GET       |                  | Get the server status                |
| /api/favs          | GET       | isAuthenticated  | Get all list of favorites            |
| /api/favs          | POST      | isAuthenticated  | Creates a new list of favorites      |
| /api/favs/:id      | GET       | isAuthenticated  | Get a single list of favorites       |
| /api/favs/:id      | DELETE    | isAuthenticated  | Deletes a list of favorites          |
| /api/users         | GET       | isAuthenticated  | Get a list of all users              |
| /api/users/:id     | GET       | isAuthenticated  | Get the info of a certain user       |
| /auth/local/signup | POST      |                  | Creates a new user by email/password |
| /auth/local/login  | POST      |                  | Login user by email/password         |

### **Endpoint notes**

&nbsp;&nbsp;&nbsp;&nbsp;For certain petitions it is necessary to add headers including the current user Token created on login and/or a body containing specific information. They are the following:

- **Header:** The token provided on user login.
- **Body:**
  - login / signup:
    {
    "email": "new_user@gmail.com",
    "password": "Cask1992"
    }
  - Create new list:
    {
    "listName": "newList"
    }

## **Personal review of the project**

&nbsp;&nbsp;&nbsp;&nbsp;If it was not for the aid of my partners and my mentors. This project would never be completed (or would have took more time for). Back-End has lots of cool stuff. Nonetheless, one might see with NoSQL databases are more used that SQL bases, without saying the role and
importance SQL databases still hold to this day.
<br /> <br />

# **TASK #2**

## _Question #1:_

### **_Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone_**

      > Protocol=>              https // for transferring data over the internet
      > Subdomain=>             backend // a part of a domain name that precedes the main domain name and identifies a specific section
      > Domain=>                mega-app.com.co // unique name that identifies a website. It consists of a series of labels separated by dots
      > Port=>                  8080 // number that identifies a specific process on a server. Can also use IP to make connections
      > Path=>                  /api/articles/search //  It specifies the location of a specific resource on the server.
      > Query Parameters=>      docid=1020&hl=en //  used to send additional information to the server. They are appended to the end of the URL and                                            separated from the path by a question mark (?).
      > Fragment Identifier=>   dayone// used to identify a specific part of a web page. It is preceded by a hash (#)

 <br />

## _Question #2:_

### **_Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-_**

#### **Web API:**

&nbsp;&nbsp;&nbsp;&nbsp; A Web API (Application Programming Interface) is a software interface that allows two applications to communicate with each other over the internet.

#### **Restful:**

&nbsp;&nbsp;&nbsp;&nbsp; REST (Representational State Transfer) is a set of architectural principles for creating web services that use HTTP protocol. RESTful web services are built to work with the HTTP protocol's request methods (GET, POST, PUT, DELETE).

#### **Status Codes:**

&nbsp;&nbsp;&nbsp;&nbsp; HTTP status codes are three-digit codes that indicate the status of a web request. The first digit of the status code specifies the class of response, and the last two digits do not have any classifying or categorization role. But some of the can be used to notify the user what kind of mistake they are making (e.g 401 is not the same as 404). Here are some commonly used status codes:

- **200 OK:** The request has been successful, and the response contains the requested data.
- **400 Bad Request:** The server could not understand the request due to invalid syntax or bad request.
- **500 Internal Server Error:** The server encountered an unexpected condition and could not fulfill the request.

## _Question #3:_

### **_ When we talk about CRUD, what does it mean?_**

&nbsp;&nbsp;&nbsp;&nbsp;CRUD stands for Create, Read, Update, and Delete. It is a set of four basic operations that are commonly used in relational database management systems (RDBMS) and web development.

- **Create:** Refers to adding a new record or object to a database or system.

- **Read:** Refers to retrieving or fetching data from a database or system.

- **Update:** Refers to modifying or updating an existing record or object in a database or system.

- **Delete:** Refers to removing or deleting a record or object from a database or system.

  <br /> <br />

 <br />
