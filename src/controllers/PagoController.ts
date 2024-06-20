import Pago from "../models/Pago";

export const savePago = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "PAG01",
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

    const obj = Pago.build(tmpobj);
    

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
            statuscode : "PAG02",
            data: e
        }
    })
    
}

export const getPagoByCodigo = (codigo: any) =>{

    return Pago.findOne({
        where : {
            ConsecutivoCompania : codigo.compania,
            NumeroComprobante : codigo.numero
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
            statuscode : "PAG03",
            data: e
        });
    })
}