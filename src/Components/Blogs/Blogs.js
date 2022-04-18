import React from "react";

const Blogs = () => {
    return(
        <div>
            <h1> Welcome to my blogs</h1>
            <h4> Question:1 Difference between `authorization` and `authentication`.</h4>
            <p>Answer:Difference between Authentication and Authorization
Both Authentication and Authorization  area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit is crucial topics usually related to the online as key items of its service infrastructure.  However each of the terms is different from one another. In short,  Authentication is the process of verifying who someone is.
In authentication process, the identity of the users is checked for providing the access to the system. While in authorization process, person’s or user’s authorities are checked for accessing the resources like applications, files, and data a user has access to. Authentication is done before the authorization process, whereas authorization process is done after the authentication process. For example, In an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.

Authentication	
In authentication process, the identity of users is checked for providing the access to the system.
In authentication process, users or persons are verified.
Authentication is the first step of a good identity and access management process.
It needs usually user’s login details, Like - passwords, one-time pins, biometric information, and other information provided or entered by the user.
Authentication determines whether the person is user or not.
Authentication is visible to and partially changeable by the user.
Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and other data.



Authorization
Authorization determines what resources a user can access.
Authorization works through settings that are implemented and maintained by the organization.
Authorization always takes place after authentication.
Authorization isn’t visible to or changeable by the user.
Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.


</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Question:2 Why are you using `firebase`? What other options do you have to implement authentication?</h4>
            <p>Answer:The Firebase is a Real-time Database, which lets us to build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, real-time events continue to fire, giving the end user a responsive experience. It also provides a seamless way to integrate with Google analytics using which the user behavioral data can be acquired, and insightful information can be generated through it. The data is useful in improving customer retention for businesses and enhancing the user engagement rate for your application. It has a wide range of services and features with free basic plan and concise documentation. Beside this, Firebase also gives quick and easy integration and setup.
Best Open Source Firebase Alternatives
1. Parse. 
2 .Back4App. ...
3. AWS Amplify. ...
4. Kuzzle. ...
5. Couchbase. ...
6. NativeScript. ...
7. RxDB. ...
8. Flutter.
</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Question:3 What other services does `firebase` provide other than authentication?</h4>
            <p>Answer:Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure.
Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.

In Firebase, a document is a set of key-value pairs defined by a schema. A group of documents makes up a collection.
There are many services which Firebase provides, Most useful of them are:
•	Cloud Firestore
•	Cloud Functions
•	Authentication
•	Hosting
•	Cloud Storage
•	Google Analytics
•	Predictions
•	Cloud Messaging
•	Dynamic Links
•	Remote Config
</p>
        </div>
    );
};

export default Blogs;