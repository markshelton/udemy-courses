import dotenv from "dotenv";
const result = dotenv.config({ silent: true, path: "../.env" });
if (result.parsed) {
  console.debug("Loaded environment variables from file:");
  console.debug(result.parsed);
} else {
  console.debug("Couldn't load environment variables from file");
}
