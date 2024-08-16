import { Router } from "express";
import { queryDB } from "../../db/mysql";

export const signupRouter = Router();

module.exports = signupRouter;

signupRouter.post("/", async (req, res) => {
  const body = req.body;
  const args = [
    body.firstName,
    body.lastName,
    body.userType,
    body.email,
    body.phoneNumber,
    body.password,
  ];
  const query =
    "INSERT INTO `vehicle_breakdown_assistance`.`user` (`first_name`, `last_name`, `role_id`, `email`, `phone_no`, `password`) VALUES (?, ?, ?, ?, ?, ?);";
  await queryDB(query, args);
  res.status(200).json({ message: "Post request received", data: body });
});
