import express, { Router, Express, Request, Response } from "express";
import { save } from "../controllers/CxPController";

export const cxprouter : Router = express.Router();

cxprouter.get("/cxp", (req: Request, res: Response) => {

    console.log(req.query); // get parameters value
   
    res.send("Form ");
});
  
cxprouter.post("/cxp", (req: Request, res: Response) => {
  
    console.log(req.body); // get body
  
    /*let data = {
      id : 1,
      message: "Creating cxp from router" 
    }*/

    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((cxp : any)=>{

        if(stopexecution) {
            return;
        }

        
        let data = save(cxp);
        if(data?.status == "error") {
            stopexecution = true;
            errormessage = data;
            console.log(errormessage);
            return;
        }

        totalitems++;
    });

    res.send(stopexecution ? errormessage : {
        status : "success",
        totalitems : totalitems
    });

});
  

