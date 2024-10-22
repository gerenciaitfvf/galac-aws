import express, { Router, Request, Response } from "express";
import _ from "lodash";
import { getCxC, getCxCwithParams, saveCxC, touchCxC } from "../controllers/CxCController";

export const cxcrouter: Router = express.Router();

cxcrouter.get("/cxc", (req: Request, res: Response) => {
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

  getCxC(offsetlimit).then((result) => {
    if (result.status != "success") {
      res.send(result);
      return;
    }

    res.send(result.data);
  });
});

cxcrouter.get("/cxc/:numero", (req: Request, res: Response) => {
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

  getCxCwithParams(params).then((result) => {
    if (result.status != "success") {
      res.send(result);
      return;
    }

    res.send(result.data);
  });
});

cxcrouter.post("/cxc", (req: Request, res: Response) => {
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
  req.body.map(async (cxp: any) => {
    if (stopexecution) {
      return;
    }

    let data = await saveCxC(cxp);
    
    if (data?.status == "error") {
      stopexecution = true;
      errormessage = data;
      console.log(errormessage);
      return;
    }

    totalitems++;
  });

  res.send(
    stopexecution
      ? errormessage
      : {
          status: "success",
          totalitems: totalitems,
        }
  );
});

cxcrouter.patch("/cxc/:compania/:cxc", (req: Request, res: Response) => {
  touchCxC({
    compania: req.params.compania,
    cxp: req.params.cxc,
  }).then((result) => {
    if (result.status != "success") {
      res.send(result);
      return;
    }

    res.send(result.data);
  });
});
