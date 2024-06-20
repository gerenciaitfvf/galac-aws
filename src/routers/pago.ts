import express, { Router, Request, Response } from "express";
import { getComprobanteById, saveComprobante } from "../controllers/ComprobanteController";
import { getPagoByCodigo, savePago } from "../controllers/PagoController";


export const pagorouter : Router = express.Router();

pagorouter.get("/pago/:compania/:numero", (req: Request, res: Response) => {

    getPagoByCodigo({
        compania : req.params.compania,
        numero : req.params.numero
    })
    .then((result)=>{
        
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
});
  
pagorouter.post("/pago", (req: Request, res: Response) => {
  
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

        
        let data = savePago(obj);
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
  

