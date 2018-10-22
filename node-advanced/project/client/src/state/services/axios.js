import axios from "axios";

const { SERVER_HOST = "localhost", SERVER_PORT = 5000 } = process.env;

const client = axios.create({
  baseURL: `http://${SERVER_HOST}:${SERVER_PORT}`
});

console.log(client);
export default client;
