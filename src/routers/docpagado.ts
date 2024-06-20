import express, { Router, Request, Response } from "express";
import { getDocumentoPagadoByCode, saveDocPagado } from "../controllers/DocumentoPagadoController";


export const docpagadorouter : Router = express.Router();

docpagadorouter.get("/docpagado/:compania/:numero", (req: Request, res: Response) => {

    

    getDocumentoPagadoByCode({
        compania : req.params.compania, 
        numero : req.params.codigo
    })
    .then((result)=>{
        
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
});
  
docpagadorouter.post("/docpagado", (req: Request, res: Response) => {
  
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

        
        let data = saveDocPagado(obj);
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
  

