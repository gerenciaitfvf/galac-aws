import { Op } from "sequelize";
import Cambio from "../models/Cambio";

export const saveTasaCambio = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "TCA01",
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

    let obj = Cambio.build(tmpobj);
    

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
            statuscode : "TCA02",
            data: e
        }
    })
    
}

export const getTasaByDateAndCode = (odate: any, codigo: any) =>{

    let fechaVigencia = new Date();
    fechaVigencia.setFullYear(odate.year);
    fechaVigencia.setMonth(odate.month);
    fechaVigencia.setDate(odate.date); 
    fechaVigencia.setHours(0,0,0,0);  
    
    return Cambio.findOne({
        where : {
            CodigoMoneda : codigo,
            FechaDeVigencia : {
                [Op.lte]: fechaVigencia
            }
        },
        order :[
            ['FechaDeVigencia','DESC']
        ],
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
            statuscode : "TCA03",
            data: e
        });
    })
}