import express from "express";
import * as functions from "firebase-functions";

const server = express();
server.get("/api", (request, response) => {
  response.send("Test");
});

const solarwebgames = functions.https.onRequest(server);

export { solarwebgames };
