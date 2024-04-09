import _ from "lodash";
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
        //console.log("error trying save object in database", e);
        return {
            status : "error",
            statuscode : "CXP02",
            data: e
        }
    })
    
}

export const getCxP = (params : any) =>{

    let limit = 10;
    let offset = 0;

    if(_.has(params, "limit")) {
        limit = params["limit"];
    }

    if(_.has(params, "offset")) {
        offset = params["offset"];
    }

    return cxp.findAndCountAll(
        {
            where: {
                isVisible : 1
            },
            limit : limit,
            offset: offset,
            raw: true
        }
    ).then((res)=>{
        //console.log("resulado", res);
        return {
            status : "success",
            statuscode : "200",
            data: {
                totalitems : res.count,
                items : res.rows,
                offset: offset,
                limit : limit 
            }
        }
    }).catch((e)=>{
        return Promise.resolve({
            status : "error",
            statuscode : "CXP03",
            data: e
        });
    })

}

export const touchCxP = (id : any) =>{
    
    return cxp.findOne({
        where : {
            ConsecutivoCompania : id.compania,
            ConsecutivoCxp : id.cxp
        }
    }).then((obj)=>{

        if(!obj) {
            return Promise.reject(
                {
                    status : "error",
                    statuscode : "CXP04",
                    data: "object not found"
                }
            );
        }

        obj.isVisible = 0;
        return obj.save();
    }).then((rsfinal)=>{
        return {
            status : "success",
            statuscode : "200",
            data: rsfinal
        }
    }).catch((e)=>{
        return e;
    })
}