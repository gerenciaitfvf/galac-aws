import { checkToken } from "../controllers/AuthController";
import _ from "lodash";

export const authtoken = (req : any, res: any, next: any) => {
    let token = req.headers["access-token-galac-fvf"];
  
    if (!token || _.isUndefined(token) || _.isEmpty(token)) {
      res.status(403).send({
        status: "error",
        statuscode: "AUTH01",
        data: "miss access token value",
      });
      return;
    }
  
    // check in database if access token is active
    checkToken(token)
    .then((checkData)=>{
  
      if (checkData.status != "success") {
        res.status(403).send(checkData);
        return;
      }
    
      next();
  
    });
  
  }