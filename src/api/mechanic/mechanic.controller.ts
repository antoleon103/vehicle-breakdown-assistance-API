import { Router } from "express";
import { queryDB } from "../../db/mysql";

export const mechanicRouter = Router();

module.exports = mechanicRouter;

mechanicRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const args = [body.garageName, body.address, body.contact, body.SpecialAt];

    console.log(args);
    const query =
      "INSERT INTO `vehicle_breakdown_assistance`.`mechanic`(`garageName`,`address`,`contact`,`specialAt`) VALUES ( ?, ?, ?, ?);";

    await queryDB(query, args);
    res.status(200).json({ message: "post request received", data: body });
  } catch (error) {
    console.error("Error handling post request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

mechanicRouter.get("/", async (req, res) => {
  const query = "select * from `vehicle_breakdown_assistance`.`mechanic`";
  const result = await queryDB(query);
  res.status(200).json({ data: result });
});
