import Cobranza from "../models/Cobranza";
import MovimientoBancario from "../models/MovimientoBancario";
import _ from "lodash"

export const saveCobranza = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "COB01",
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

    const obj = Cobranza.build(tmpobj);
    

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
            statuscode : "COB02",
            data: e
        }
    })
    
}

export const getCobranzaByCodigo = (codigo: any) =>{

    let pagoReloaded : any = {};

    return Cobranza.findOne({
        where : {
            ConsecutivoCompania : codigo.compania,
            Numero : codigo.numero
        },
        raw: true
    }).then((result : any) => {
        
        if(result) {
            pagoReloaded = result;
            return MovimientoBancario.findOne({
                where : {
                    ConsecutivoCompania : result.ConsecutivoCompania,
                    NroMovimientoRelacionado : result.Numero
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
            statuscode : "COB03",
            data: e
        });
    })
}