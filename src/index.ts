import express, { Express } from "express";
import dotenv from "dotenv";
import { cxprouter } from "./routers/cxp";
import { sequelize } from "./services/connection";
import _ from "lodash";

import { cxp } from "./models/CxP";
import { mcs } from "./models/MainControlSync";
import { authtoken } from "./middleware/authtoken";
import { mscrouter } from "./routers/MainControlSyncRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(authtoken);

app.use(express.json()); // all response and body request are in json format
app.use(cxprouter);
app.use(mscrouter);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await cxp.sync();
    await mcs.sync();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.error("Connection to database is not correct", e);
  }

  console.log(`[server]: Server is running at http://localhost:${port}`);
});
