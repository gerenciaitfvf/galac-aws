import express, { Router, Request, Response } from "express";
import { saveComprobante } from "../controllers/ComprobanteController";


export const comprobanterouter : Router = express.Router();

comprobanterouter.get("/comprobante", (req: Request, res: Response) => {

    console.log(req.query); // get parameters value
   
    res.send("Form ");
});
  
comprobanterouter.post("/comprobante", (req: Request, res: Response) => {
  
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

        
        let data = saveComprobante(obj);
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
  

