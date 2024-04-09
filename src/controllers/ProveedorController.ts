import Proveedor from "../models/Proveedor";

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