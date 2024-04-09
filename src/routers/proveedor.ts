import express, { Router, Express, Request, Response } from "express";
import { saveProveedor } from "../controllers/ProveedorController";

export const proveedorrouter : Router = express.Router();

proveedorrouter.get("/proveedor", (req: Request, res: Response) => {

    console.log(req.query); // get parameters value
   
    res.send("Form ");
});
  
proveedorrouter.post("/proveedor", (req: Request, res: Response) => {
  
    //console.log(req.body); // get body
  
    /*let data = {
      id : 1,
      message: "Creating cxp from router" 
    }*/

    let totalitems = 0;
    let stopexecution = false;
    let errormessage = {};
    req.body.map((proveedor : any)=>{

        if(stopexecution) {
            return;
        }

        
        let data = saveProveedor(proveedor);
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
  

