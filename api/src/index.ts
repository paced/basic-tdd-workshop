import express, {Request, Response} from "express";

const HTTP_PORT = 8080;

// Define routines.

/**
 * Read the existing message from a file, defaulting if the file does not exist.
 *
 * Response is sent in the `res` object.
 *
 * @param {e.Request} req the request
 * @param {e.Response} res the response
 */
const read = async (req: Request, res: Response) => {
  // TODO: Implement. Hint: see "utils/io.ts".
}

// Set up routes to routines.

const app = express();

app.get("/api/v1/read", read);
app.listen(HTTP_PORT, () => {
  console.log(`API server started at: [ http://localhost:${HTTP_PORT} ]...`)
});
