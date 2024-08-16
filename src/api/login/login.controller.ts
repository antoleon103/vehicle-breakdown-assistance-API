import { Router } from "express";
import { queryDB } from "../../db/mysql";

export const loginRouter = Router();

module.exports = loginRouter;

loginRouter.post("/", async (req, res) => {
  const body = req.body;
  const args = [body.username];
  const query = "select password, role_id, user_id from vehicle_breakdown_assistance.user where email=?"
  const result = await queryDB(query, args)
  if(result[0]?.password != body.password) {
    res.status(401).json({ message: "Unauthorized user" });
  }
  const role_id: number = result[0].role_id;
  res.status(200).json({ message: "Logged in successfully", data: {role_id: role_id, user_id: result[0].user_id} });
});
