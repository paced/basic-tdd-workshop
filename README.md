# Global Message

## Introduction

Global Message is a simple message, form, and submit button. The message will read whatever the server has currently 
stored whenever you refresh the page. Anybody in the world can submit to the form and change what the message says 
the next time you refresh the page.

The frontend is a NextJS-rendered static web page. The backend is an ExpressJS RESTful API with two endpoints:

- GET `/api/v1/read`: Read the message

The response is simply text:

```txt
Hello, World!
```

- POST `/api/v1/write`: Write the message

The payload is JSON and is expected to have the general form:

```json
{
  "message": "<some_message>"
}
```

> **Note**: For this demonstration we are focusing only on TDD: don't worry about non-functional requirements right 
> now, including the validation of user input.

## Workshop Task

> Heavy Googling may be required for all tasks.

The current state of the project:

- The frontend is completed.
- The backend has been partially stubbed and doesn't do anything.

### Task 1

> Hint: you can either read/write files before you run your assertions, or you can use Sinon to mock the file system.

Implement the backend feature to read a message using the existing stub, writing a test first. Then, implement the 
backend feature to write a message: the function and the route handling by using Test Driven Development (TDD) 
principles.

## Task 2

Modify the React app such that the message immediately changes to what you have written once you click "Send", also 
by utilising a TDD approach. Your approach should _not_ call the backend server (i.e., the test must be able to run 
without the backend running) by utilising the provided mock library (Sinon).

---

Good luck and have fun!

## Build Instructions

The frontend is in the `ui/` directory, and the backend is in `api/`. Both are Node 16 projects.

```shell
npm install
npm run build
npm run dev
```
