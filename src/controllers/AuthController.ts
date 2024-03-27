import { authToken } from "../models/AuthTokenApp";
import _ from "lodash";

export const checkToken = (token: any) => {
  
  if (!token) {
    return Promise.resolve({
      status: "error",
      statuscode: "AUTH02",
      data: "token is blank",
    });
  }

  return authToken
    .findByPk(token, { raw : true })
    .then((authobj) => {
            
      if (_.isNull(authobj)) {
        return {
          status: "error",
          statuscode: "AUTH04",
          data: "access token not found",
        };
      }

      if (authobj.status_token != "active") {
        return {
          status: "error",
          statuscode: "AUTH05",
          data: "access token is disabled",
        };
      }

      
      return {
        status: "success",
        statuscode: "200",
        data: "access granted",
      };
    })
    .catch((e) => {
      console.log("error read database table auth_token_app", e);
      return {
        status: "error",
        statuscode: "AUTH03",
        data: e,
      };
    });
};
