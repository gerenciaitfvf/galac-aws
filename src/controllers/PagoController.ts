import MovimientoBancario from "../models/MovimientoBancario";
import Pago from "../models/Pago";
import _ from "lodash"

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

    let pagoReloaded : any = {};

    return Pago.findOne({
        where : {
            ConsecutivoCompania : codigo.compania,
            NumeroComprobante : codigo.numero
        },
        raw: true
    }).then((result : any) => {

        if(result) {
            pagoReloaded = result;
            return MovimientoBancario.findOne({
                where : {
                    ConsecutivoCompania : result.ConsecutivoCompania,
                    NroMovimientoRelacionado : result.NumeroComprobante
                },
                raw: true
            })
        }

        // Result is null
        return MovimientoBancario.findOne({
            where : {
                ConsecutivoCompania : -1
            }, raw: true
        })

    }).then((result) => { 

        pagoReloaded['movbancario'] = result;
        // Result is null
        return Promise.resolve ({
            status : "success",
            statuscode : "200",
            data: result ? pagoReloaded : null
        })      

    })
    .catch((e)=>{
        console.log(e);
        return Promise.resolve({
            status : "error",
            statuscode : "PAG03",
            data: e
        });
    })
}