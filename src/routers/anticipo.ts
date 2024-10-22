import express, { Router, Request, Response } from "express";
import _ from "lodash";
import { getAnticipo, getAnticipowithParams, saveAnticipo, saveAnticipoCobrado, saveAnticipoPagado } from "../controllers/AnticipoController";

export const anticiporouter : Router = express.Router();
  
anticiporouter.post("/anticipo", (req: Request, res: Response) => {
  
    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((obj : any)=>{

        if(stopexecution) {
            return;
        }
        
        let data = saveAnticipo(obj);
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

anticiporouter.post("/anticipocobrado", (req: Request, res: Response) => {
  
    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((obj : any)=>{

        if(stopexecution) {
            return;
        }
        
        let data = saveAnticipoCobrado(obj);
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

anticiporouter.post("/anticipopagado", (req: Request, res: Response) => {
  
    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((obj : any)=>{

        if(stopexecution) {
            return;
        }
        
        let data = saveAnticipoPagado(obj);
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

anticiporouter.get("/anticipo", (req: Request, res: Response) => {
    //console.log(req.query); // get parameters value
    let offsetlimit = {
      offset: 0,
      limit: 10,
    };
  
    if (!_.isUndefined(req.query.offset)) {
      offsetlimit.offset = +req.query.offset;
    }
  
    if (!_.isUndefined(req.query.limit)) {
      offsetlimit.limit = +req.query.limit;
    }
  
    getAnticipo(offsetlimit).then((result) => {
      if (result.status != "success") {
        res.send(result);
        return;
      }
  
      res.send(result.data);
    });
});

anticiporouter.get("/anticipo/:numero", (req: Request, res: Response) => {
    //console.log(req.query); // get parameters value
  
    let params: any = {
      offset: 0,
      limit: 10,
     // check this param compania: 10,
      numero: req.params.numero,
    };
  
    if (!_.isUndefined(req.query.offset)) {
      params.offset = +req.query.offset;
    }
  
    if (!_.isUndefined(req.query.limit)) {
      params.limit = +req.query.limit;
    }
  
    getAnticipowithParams(params).then((result) => {
      if (result.status != "success") {
        res.send(result);
        return;
      }
  
      res.send(result.data);
    });
});


