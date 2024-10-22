import _ from "lodash";
import CxC  from "../models/CxC";

export const saveCxC = (cxcjson : any) => {
    

    if(!cxcjson) {
        return {
            status : "error",
            statuscode : "CVC01",
            data : "CVCjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(cxcjson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });
    

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    let obj = CxC.build(tmpobj);

    obj
    .save()
    .then( (result : any) => {
        //console.log(result);
        /*if(cxcjson.Numero == '013285') {
            console.log(result);
            console.log("caramba");
            console.log(obj);
            console.log("fin caramba");
        }*/
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    })
    .catch((e : any) => {
        
        return {
            status : "error",
            statuscode : "CVC02",
            data: e
        }
    })
    
}

export const getCxC = (params : any) =>{

    let limit = 10;
    let offset = 0;

    if(_.has(params, "limit")) {
        limit = params["limit"];
    }

    if(_.has(params, "offset")) {
        offset = params["offset"];
    }

    return CxC.findAndCountAll(
        {
            where: {
                isVisible : 1
            },
            limit : limit,
            offset: offset,
            raw: true
        }
    ).then((res : any)=>{
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
    }).catch((e : any)=>{
        return Promise.resolve({
            status : "error",
            statuscode : "CVC03",
            data: e
        });
    })

}

export const getCxCwithParams = (params : any) =>{

    let limit = 10;
    let offset = 0;

    if(_.has(params, "limit")) {
        limit = params["limit"];
    }

    if(_.has(params, "offset")) {
        offset = params["offset"];
    }

    let whereparams : any = {};
    if(_.has(params, "compania")) {
        whereparams["ConsecutivoCompania"] = params.compania;
    }

    if(_.has(params, "numero")) {
        whereparams["Numero"] = params.numero;
    }

    return CxC.findAndCountAll(
        {
            where: whereparams,
            limit : limit,
            offset: offset,
            raw: true
        }
    ).then((res : any)=>{
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
    }).catch((e : any)=>{
        return Promise.resolve({
            status : "error",
            statuscode : "CVC03",
            data: e
        });
    })

}

export const touchCxC = (id : any) =>{
    
    return CxC.findOne({
        where : {
            ConsecutivoCompania : id.compania,
            ConsecutivoCxc : id.cxc
        }
    }).then((obj : any)=>{

        if(!obj) {
            return Promise.reject(
                {
                    status : "error",
                    statuscode : "CVC04",
                    data: "object not found"
                }
            );
        }

        obj.isVisible = 0;
        return obj.save();
    }).then((rsfinal : any)=>{
        return {
            status : "success",
            statuscode : "200",
            data: rsfinal
        }
    }).catch((e : any)=>{
        return e;
    })
}