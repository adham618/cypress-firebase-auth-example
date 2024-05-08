import { defineConfig } from "cypress";

require("dotenv").config();
require("dotenv").config({ path: ".env.local" });

export default defineConfig({
  projectId: "7ymsq5",
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  env: {
    CYPRESS_TEST_EMAIL: process.env.CYPRESS_TEST_EMAIL,
    CYPRESS_TEST_PASSWORD: process.env.CYPRESS_TEST_PASSWORD,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
