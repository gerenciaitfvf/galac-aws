import { DATE } from "sequelize";
import { mcs } from "../models/MainControlSync";
import _ from "lodash";

export const save = (tablename: string) => {
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
  };

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
          data: "2022-01-01",
        };
      }

      return {
        status: "success",
        statuscode: "200",
        data: mcsync.date_updated,
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
