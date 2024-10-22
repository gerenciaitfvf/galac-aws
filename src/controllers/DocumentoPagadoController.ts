import DocumentoPagado from "../models/DocumentoPagado";

export const saveDocPagado = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "DPA01",
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

    const obj = DocumentoPagado.build(tmpobj);
    

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
            statuscode : "DPA02",
            data: e
        }
    })
    
}

export const getDocumentoPagadoByCode = (codigo: any) =>{

    return DocumentoPagado.findOne({
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
            statuscode : "DPA03",
            data: e
        });
    })
}