const express = require("express");
const expressGraphQL = require("express-graphql");
const axios = require("axios");

const client = axios.create({
  baseURL: "http://localhost:3000"
});
client.interceptors.response.use(res => (res.data ? res.data : res));

module.exports = { client };

const schema = require("./schema/schema");

const app = express();

app.use("/graphql", expressGraphQL({ schema, graphiql: true }));

app.listen(4000, () => console.log("Listening on port 4000"));
