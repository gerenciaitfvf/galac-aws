import express, { Router, Request, Response } from "express";
import { getComprobanteById, saveComprobante } from "../controllers/ComprobanteController";


export const comprobanterouter : Router = express.Router();

comprobanterouter.get("/comprobante/:periodo/:numero", (req: Request, res: Response) => {

    getComprobanteById({
        periodo : req.params.periodo,
        numero : req.params.numero,
    })
    .then((result)=>{
        
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
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
  

