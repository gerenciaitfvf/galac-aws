import express, { Router, Request, Response } from "express";
import { saveMBank } from "../controllers/MovimientoBancarioController";


export const mbankrouter : Router = express.Router();

mbankrouter.get("/movimientobancario", (req: Request, res: Response) => {

    console.log(req.query); // get parameters value
   
    res.send("Form ");
});
  
mbankrouter.post("/movimientobancario", (req: Request, res: Response) => {
  
    //console.log(req.body); // get body
  
    /*let data = {
      id : 1,
      message: "Creating cxp from router" 
    }*/

    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((obj : any)=>{

        if(stopexecution) {
            return;
        }

        
        let data = saveMBank(obj);
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
  

