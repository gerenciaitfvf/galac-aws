import { mcs } from "../models/MainControlSync";
import _ from "lodash";

export const save = (tablename: string, lastid: number | undefined) => {
  if (!tablename) {
    return Promise.resolve({
      status: "error",
      statuscode: "MSC01",
      data: "tablename is blank",
    });
  }

  let tmpobj = {
    table_name: tablename,
    date_updated: new Date(),
    jinfo : { 
      lastid : 0 // for documentopagado
    }
  };

  if(lastid) {
    tmpobj.jinfo.lastid = lastid;
  }

  let obj: any = null;
  return mcs
    .findOne({
      where: {
        table_name: tmpobj.table_name,
      },
    })
    .then((mcsobj) => {
      if (!mcsobj) {
        obj = mcs.build(tmpobj);
      } else {
        obj = mcsobj;
        obj.date_updated = tmpobj.date_updated;
        if(obj.jinfo.lastid < tmpobj.jinfo.lastid) {
          obj.jinfo = tmpobj.jinfo;
        }
      }

      return obj.save();
    })
    .then((result) => {
      return {
        status: "success",
        statuscode: "200",
        data: result,
      };
    })
    .catch((e) => {
      console.log("error trying save/update object msc in database", e);
      return {
        status: "error",
        statuscode: "MSC02",
        data: e,
      };
    });
};

export const getTableLastUpdate = (tablename: any) => {

  if (!tablename) {
    return Promise.resolve({
      status: "error",
      statuscode: "MSC01",
      data: "tablename is blank"
    });
  }

  return mcs
    .findOne({
      where: {
        table_name: tablename,
      },
    })
    .then((mcsync) => {
      if (_.isNull(mcsync)) {
        return {
          status: "success",
          statuscode: "200",
          data: {
            lastdate : "2022-01-01",
            jinfo : {
              lastid : 0
            }

          },
        };
      }

      return {
        status: "success",
        statuscode: "200",
        data: {
          lastdate : mcsync.date_updated,
          jinfo : mcsync.jinfo
        },
      };
    })
    .catch((e) => {
      console.log("error read database table main_control_sync", e);
      return {
        status: "error",
        statuscode: "MCS03",
        data: e,
      };
    });
};
