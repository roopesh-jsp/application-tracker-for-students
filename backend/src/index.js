import { config } from "dotenv";
import { ConnectDb } from "./db/connectDb.js";
import app from "./app.js";

config();

ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is lisitinig at ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Failed on mongo", err);
  });
