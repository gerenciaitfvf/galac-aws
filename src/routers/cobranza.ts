import express, { Router, Request, Response } from "express";
import { getCobranzaByCodigo, saveCobranza } from "../controllers/CobranzaController";


export const cobranzarouter : Router = express.Router();

cobranzarouter.get("/cobranza/:numero", (req: Request, res: Response) => {

    getCobranzaByCodigo({
        compania : 10,
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
  
cobranzarouter.post("/cobranza", (req: Request, res: Response) => {
  
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

        
        let data = saveCobranza(obj);
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
  

