import _ from "lodash";
import Anticipo from "../models/Anticipo";
import AnticipoPagado from "../models/AnticipoPagado";
import AnticipoCobrado from "../models/AnticipoCobrado";

export const saveAnticipo = (anticipojson : any) => {
    

    if(!anticipojson) {
        return {
            status : "error",
            statuscode : "ANT01",
            data : "ANTjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(anticipojson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    const obj = Anticipo.build(tmpobj);
    
    obj.save()
    .then( (result : any) => {
        //console.log(result);
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    })
    .catch((e : any) => {
        //console.log("error trying save object in database", e);
        return {
            status : "error",
            statuscode : "ANT02",
            data: e
        }
    })
    
}

export const saveAnticipoPagado = (anticipojson : any) => {
    

    if(!anticipojson) {
        return {
            status : "error",
            statuscode : "ANP01",
            data : "ANPjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(anticipojson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    const obj = AnticipoPagado.build(tmpobj);
    
    obj.save()
    .then( (result : any) => {
        //console.log(result);
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    })
    .catch((e : any) => {
        //console.log("error trying save object in database", e);
        return {
            status : "error",
            statuscode : "ANP02",
            data: e
        }
    })
    
}

export const saveAnticipoCobrado = (anticipojson : any) => {
    

    if(!anticipojson) {
        return {
            status : "error",
            statuscode : "ANC01",
            data : "ANCjson is blank"
        };
    }
    

    let stringObj = JSON.stringify(anticipojson, (key, value) =>{
        if(value != null && value == '') {
            return null;
        }
        return value
    });

    let tmpobj = JSON.parse(stringObj);
    tmpobj.isVisible = 1;

    const obj = AnticipoCobrado.build(tmpobj);
    
    obj.save()
    .then( (result : any) => {
        //console.log(result);
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    })
    .catch((e : any) => {
        //console.log("error trying save object in database", e);
        return {
            status : "error",
            statuscode : "ANC02",
            data: e
        }
    })
    
}

export const getAnticipo = (params : any) =>{

    let limit = 10;
    let offset = 0;

    if(_.has(params, "limit")) {
        limit = params["limit"];
    }

    if(_.has(params, "offset")) {
        offset = params["offset"];
    }

    return Anticipo.findAndCountAll(
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
            statuscode : "ANT03",
            data: e
        });
    })

}

export const getAnticipowithParams = (params : any) =>{

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

    return Anticipo.findAndCountAll(
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
            statuscode : "ANT04",
            data: e
        });
    })

}