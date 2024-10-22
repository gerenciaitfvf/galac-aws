//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import {sequelize} from '../services/connection';

export default class AnticipoCobrado extends Model {
    
  ConsecutivoCompania: number | undefined; // [int] NOT NULL,
	NumeroCobranza: string | undefined; // [varchar](12) NOT NULL,
	Secuencial: number | undefined; // [int] NOT NULL,
	ConsecutivoAnticipoUsado: number | undefined; // [int] NOT NULL,
	NumeroAnticipo: string | undefined; // [varchar](20) NULL,
	MontoOriginal: number | undefined; // [money] NULL,
	MontoRestanteAlDia: number | undefined; // [money] NULL,
	SimboloMoneda: string | undefined; // [varchar](4) NULL,
	CodigoMoneda: string | undefined; // [varchar](4) NULL,
	Cambio: number | undefined; // [money] NULL,
	MontoTotalDelAnticipo: number | undefined; // [money] NULL,
	MontoAplicado: number | undefined; // [money] NULL,
	fldTimeStamp: number | undefined; // [timestamp] NOT NULL,
	MontoAplicadoMonedaOriginal: number | undefined; // [money] NULL,
	CambioAMonedaLocal: number | undefined; // [money] NULL,
	SimboloMonedaDelAbono: string | undefined; // [varchar](4) NULL,
}

AnticipoCobrado.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NumeroCobranza: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      Secuencial: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ConsecutivoAnticipoUsado: {
        type: DataTypes.INTEGER,
      },
      NumeroAnticipo: {
        type: DataTypes.STRING,
      },
      MontoOriginal: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoRestanteAlDia: {
        type: DataTypes.DECIMAL(14,4),
      },
      SimboloMoneda: {
        type: DataTypes.STRING,
      },
      CodigoMoneda: {
        type: DataTypes.STRING,
      },
      Cambio: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoTotalDelAnticipo: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoAplicado: {
        type: DataTypes.DECIMAL(14,4),
      },
      fldTimeStamp: {
        type: DataTypes.INTEGER,
      },
      MontoAplicadoMonedaOriginal: {
        type: DataTypes.DECIMAL(14,4),
      },
      CambioAMonedaLocal: {
        type: DataTypes.DECIMAL(14,4),
      },
      SimboloMonedaDelAbono: {
        type: DataTypes.STRING,
      },
      
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'anticipo_cobrado',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });