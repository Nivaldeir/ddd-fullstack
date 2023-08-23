# Uber Variation

Project developed in Rodrigo Branas's course with a focus on understanding and putting into practice the concepts of Clean Code, Clean Architecture, Refactoring, Test-Driven Development, Ports and Adapters, Domain-Driven Design and Event-Drive Architecture

## 🚀 Starting


These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.


### 🔧 Installation

A series of step-by-step examples that tell you what you must do to get a development environment running and running the microservices.

To run the server that will manage user information:

```
cd backend/account
npm install
npx nodemon src/main_api.ts
```

To run the server that will handle race requests:

```
cd backend/ride
npm install
npx nodemon src/main_api.ts
```

To run the server that will handle payment requests:

```
cd backend/payment
npm install
npx nodemon src/main_api.ts
```

## ⚙️ Running the tests
Explain how to run the automated tests for this system.

### 🔩 Analyze end-to-end tests

To run the tests, enter each repository and run:

```
npx jest
```

## 🛠️ Built with

Mention the tools you used to create your project

* NPM - Dependency Manager
* RabbitMQ - Messaging management
* Postgress - Data management
* Vue - Framework web


## ✒️ Authors

[nivaldeir](https://github.com/nivaldeir).

## 🎁 Expressões de gratidão

* Tell others about this project 📢;
* Invite someone from the team for a beer 🍺;
* A publicly thank you   ;
* etc.

---
⌨️ with ❤️ per [nivaldeir](https://github.com/Nivaldeir) 😊