import express, { Router, Request, Response } from "express";
import { getCxP, save, touchCxP } from "../controllers/CxPController";
import _ from "lodash"

export const cxprouter : Router = express.Router();

cxprouter.get("/cxp", (req: Request, res: Response) => {

    //console.log(req.query); // get parameters value
   let offsetlimit = {
        offset : 0,
        limit : 10
   }

   if(!_.isUndefined(req.query.offset)) {
        offsetlimit.offset = +req.query.offset;
   }
   
   if(!_.isUndefined(req.query.limit)) {
        offsetlimit.limit = +req.query.limit;
   }

    getCxP(offsetlimit)
    .then((result)=>{
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
    
});

cxprouter.get("/cxp/:rif/:numero", (req: Request, res: Response) => {

    //console.log(req.query); // get parameters value
   
    getCxP({})
    .then((result)=>{
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });
    
});
  
cxprouter.post("/cxp", (req: Request, res: Response) => {
  
    //console.log(req.body); // get body
  
    /*
    let data = {
      id : 1,
      message: "Creating cxp from router" 
    }
    */

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
  
cxprouter.patch("/cxp/:compania/:cxp",(req: Request, res: Response)=>{

    touchCxP({
        compania: req.params.compania,
        cxp: req.params.cxp,
    }).then((result)=>{
        
        if(result.status != "success") {
            res.send(result);
            return;
        }

        res.send(result.data);
    });

})

