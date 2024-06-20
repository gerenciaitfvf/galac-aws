import express, { Router, Request, Response } from "express";
import { getTableLastUpdate, save } from "../controllers/MainControlSyncController";
import { mcs } from "../models/MainControlSync";
import _ from "lodash";

export const mscrouter : Router = express.Router();

mscrouter.get("/mcs/:tablename", (req: Request, res: Response) => {
    
    getTableLastUpdate(req.params.tablename)
    .then((result)=>{
        if(result.status != "success") {
            res.status(500).send(result);
            return;
        }

        res.send(result);
    })

});

mscrouter.patch("/mcs/:tablename/:lastid", (req: Request, res: Response) => {

    save(req.params.tablename, +req.params.lastid)
    .then((result)=>{
        
        if(result.status != "success") {
            res.status(500).send(result);
            return;
        }
        
        res.send(result);
    })

});
  
mscrouter.patch("/mcs/:tablename", (req: Request, res: Response) => {

    save(req.params.tablename, undefined)
    .then((result)=>{
        
        if(result.status != "success") {
            res.status(500).send(result);
            return;
        }
        
        res.send(result);
    })

});
  

