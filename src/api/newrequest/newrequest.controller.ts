import { Router } from "express";
import { queryDB } from "../../db/mysql";

export const newrequestRouter = Router();

module.exports = newrequestRouter;

newrequestRouter.post("/", async (req, res) => {
  const body = req.body;
  const args = [
    body.vehicleOwnername,
    body.vehicleModel,
    body.vehicleIssue,
    body.description,
    body.location,
    "sent",
    body.SelectMechanic,
  ];

  console.log(args)
  const query =
    "INSERT INTO `vehicle_breakdown_assistance`.`newrequest`(`Vehicle_Owner_name`,`Vehicle_Model`,`Vehicle_Issue`,`Description`,`Location`,`status`, `SelectMechanic`) VALUES (?, ?, ?, ?, ?, ?, ?);";
  await queryDB(query, args);
  res.status(200).json({ message: "Post request received", data: body });
});

newrequestRouter.get("/", async (req , res)=> {
    const query = 
    "SELECT n.id, n.Description, n.Location, n.SelectMechanic, n.Vehicle_Issue, n.Vehicle_Model, n.Vehicle_Owner_name, " +
    "m.address, m.contact, m.garageName, m.specialAt, n.status " +
     " FROM vehicle_breakdown_assistance.newrequest n, vehicle_breakdown_assistance.mechanic m where n.SelectMechanic = m.id;"
    const result = await queryDB(query)
    res.status(200).json({ data: result });
});

newrequestRouter.post("/accept", async (req , res)=>{
  const body = req.body;
  const args = [
    body.id
  ];
  const query = 
  "UPDATE `vehicle_breakdown_assistance`.`newrequest` SET `status` = 'Accepted' WHERE (`id` = ?)";
  const result = await queryDB(query, args)
  res.status(200).json({ status: "success" });
});

newrequestRouter.post("/reject", async (req , res)=>{
  const body = req.body;
  const args = [
    body.id
  ];
  const query = 
  "UPDATE `vehicle_breakdown_assistance`.`newrequest` SET `status` = 'Rejected' WHERE (`id` = ?)";
  const result = await queryDB(query, args)
  res.status(200).json({ status: "success" });
});

