import { Router } from "express";
import { queryDB } from "../../db/mysql";

export const feedbackRouter = Router();

module.exports = feedbackRouter;

feedbackRouter.post('/' , async (req , res ) => {
    const body = req.body;
    const args = [body.feedback,
        body.userRating
    ]

    console.log(args)  
    const query = 
    "INSERT INTO `vehicle_breakdown_assistance`.`feedback`(`feedback`,`userRating`) VALUES(? , ? );";
    
  await queryDB(query, args);
  res.status(200).json({ message: "Post request received", data: body });
});
