import { cxp } from "../models/CxP";

export const save = (cxpjson : any) => {
    

    if(!cxpjson) {
        return {
            status : "error",
            statuscode : "CXP01",
            data : "cxpjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(cxpjson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    const obj = cxp.build(tmpobj);
    

    obj.save()
    .then( (result) => {
        //console.log(result);
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    })
    .catch((e) => {
        console.log("error trying save object in database", e);
        return {
            status : "error",
            statuscode : "CXP02",
            data: e
        }
    })
    
}