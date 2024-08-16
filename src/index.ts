import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors');

dotenv.config();


const app = express();
app.use(cors());
// const corsOptions = {
//   origin: 'https://localhost', // Allow only requests from this origin
// };
// app.use(cors(corsOptions));
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/v1", require('./api/router'))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});