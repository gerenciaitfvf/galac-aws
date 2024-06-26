import Comprobante from "../models/Comprobante";


export const saveComprobante = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "COM01",
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

    const obj = Comprobante.build(tmpobj);
    

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
            statuscode : "COM02",
            data: e
        }
    })
    
}

export const getComprobanteById = (id: any) =>{

    return Comprobante.findOne({
        where : {
            ConsecutivoPeriodo : id.periodo,
            Numero : id.numero
        },
        raw: true
    }).then((result)=>{
        return {
            status : "success",
            statuscode : "200",
            data: result
        }
    }).catch((e)=>{
        return Promise.resolve({
            status : "error",
            statuscode : "COM03",
            data: e
        });
    })
}