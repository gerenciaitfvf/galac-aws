//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../services/connection";

export default class Cambio extends Model {
  

  CodigoMoneda: string | undefined; // [varchar](4) NOT NULL,
	FechaDeVigencia: any | undefined; // smalldatetime] NOT NULL,
	CambioAMonedaLocal: number | undefined; //  [decimal](30, 5) NOT NULL,
	CambioAMonedaLocalVenta: number | undefined; //  [decimal](30, 5) NOT NULL,
	NombreOperador: string | undefined; //  [varchar](20) NULL,
	FechaUltimaModificacion: any | undefined; //  [smalldatetime] NULL,
	
}

Cambio.init({
  CodigoMoneda: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      FechaDeVigencia: {
        type: DataTypes.DATE,
        primaryKey: true
      },
      CambioAMonedaLocal: {
        type: DataTypes.DECIMAL(20,4)
      },
      CambioAMonedaLocalVenta: {
        type: DataTypes.DECIMAL(20,4)
      },
      NombreOperador : {
        type: DataTypes.STRING
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATE
      }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance    
    modelName: 'cambio',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });