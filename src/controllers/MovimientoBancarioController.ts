import MovimientoBancario from "../models/MovimientoBancario";

export const saveMBank = (objjson : any) => {
    

    if(!objjson) {
        return {
            status : "error",
            statuscode : "MB01",
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

    const obj = MovimientoBancario.build(tmpobj);
    

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
            statuscode : "MB02",
            data: e
        }
    })
    
}