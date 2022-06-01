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

And the server will send an empty 201 response on success, a 500 if the request fails.

## Workshop Task

> Heavy Googling may be required for all tasks.

The current state of the project:

- The frontend is completed.
  - But it is missing a Jest test for the refresh of the component.
- The backend has been partially stubbed (read) and incomplete.
  - The "write" routine isn't even considered in it yet.

### Task 1 and 2

> Hint: use Sinon to mock the file system rather than reading files.

Implement the backend feature to read a message using the existing stub, writing a test first. Then, implement the 
backend feature to write a message: the function and the route handling by using Test Driven Development (TDD) 
principles.

## Task 3 and 4

Add a test after the fact for reading from the server on page refresh.

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
