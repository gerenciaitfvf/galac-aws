import express, { Router, Request, Response } from "express";
import { getTasaByDateAndCode, saveTasaCambio } from "../controllers/CambioController";


export const tasacambiorouter : Router = express.Router();

tasacambiorouter.get("/pago/:codigo", (req: Request, res: Response) => {

    let datenow = new Date();

    getTasaByDateAndCode(
        datenow.getFullYear() + "-" + datenow.getMonth() + "-" + datenow.getDay(),
        req.params.codigo
    )
    .then((result)=>{
        
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
});
  
tasacambiorouter.post("/tasacambio", (req: Request, res: Response) => {
  
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

        
        let data = saveTasaCambio(obj);
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
  

