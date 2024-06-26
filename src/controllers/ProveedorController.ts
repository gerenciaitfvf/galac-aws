import Proveedor from "../models/Proveedor";
import _ from "lodash"

export const saveProveedor = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "PRO01",
            data : "objjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(objjson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    const obj = Proveedor.build(tmpobj);
    

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
            statuscode : "PRO02",
            data: e
        }
    })
    
}

export const getProveedorByCodigo = (codigo: any) =>{

    return Proveedor.findOne({
        where : {
            CodigoProveedor : codigo
        },
        raw: true
    }).then((result)=>{
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    }).catch((e)=>{
        console.log(e);
        return Promise.resolve({
            status : "error",
            statuscode : "PRO03",
            data: e
        });
    })
}

export const getProveedor = (params : any) =>{

    let limit = 10;
    let offset = 0;

    if(_.has(params, "limit")) {
        limit = params["limit"];
    }

    if(_.has(params, "offset")) {
        offset = params["offset"];
    }

    return Proveedor.findAndCountAll({
        limit : limit,
        offset: offset,
        raw: true
    }).then((result)=>{
        return {
            status : "success",
            statuscode : "200",
            data: {
                totalitems : result.count,
                items : result.rows,
                offset: offset,
                limit : limit 
            }
        }
    }).catch((e)=>{
        console.log(e);
        return Promise.resolve({
            status : "error",
            statuscode : "PRO03",
            data: e
        });
    })
}