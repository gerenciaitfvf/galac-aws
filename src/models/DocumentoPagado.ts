import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection";

export default class DocumentoPagado extends Model {

    ConsecutivoCompania: number | undefined; // P [int] NOT NULL,
	NumeroComprobante: number | undefined; // P [int] NOT NULL,
	ConsecutivoCxP: number | undefined; //[int] NOT NULL,
	Secuencial: number | undefined; // P [int] NOT NULL,
	NumeroDelDocumentoPagado: string | undefined; // [varchar](25) NULL,
	MontoAbonado: number | undefined; // [money] NULL,
	RetenerIva: string | undefined; // [char](1) NOT NULL,
	MontoIvaRetenido: number | undefined; // [money] NULL,
	CodigoMonedaDeCxP: string | undefined; // [varchar](4) NULL,
	SimboloMonedaDeCxP: string | undefined; // [varchar](4) NULL,
	CambioAMonedaDelPago: number | undefined; // [money] NULL,
	MontoEnMonedaOriginalDeCxP: number | undefined; // [money] NULL,
	MontoRestanteAlDiaDelPago: number | undefined; // [money] NULL,
	MontoTotalDeCxP: number | undefined; // [money] NULL,
	SeHizoLaRetencionIva: string | undefined; // [char](1) NOT NULL,
    isVisible : number | undefined;
    fldTimeStamp : number | undefined;
}

DocumentoPagado.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NumeroComprobante: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ConsecutivoCxP: {
        type: DataTypes.INTEGER,
    },
    Secuencial: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    NumeroDelDocumentoPagado: {
        type: DataTypes.STRING,
    },
    MontoAbonado: {
        type: DataTypes.DECIMAL(20,4),
    },
    RetenerIva: {
        type: DataTypes.STRING,
    },
    MontoIvaRetenido: {
        type: DataTypes.DECIMAL(20,4),
    },
    CodigoMonedaDeCxP: {
        type: DataTypes.STRING,
    },
    SimboloMonedaDeCxP: {
        type: DataTypes.STRING,
    },
    CambioAMonedaDelPago: {
        type: DataTypes.DECIMAL(20,4),
    },
    MontoEnMonedaOriginalDeCxP: {
        type: DataTypes.DECIMAL(20,4),
    },
    MontoRestanteAlDiaDelPago: {
        type: DataTypes.DECIMAL(20,4),
    },
    MontoTotalDeCxP: {
        type: DataTypes.DECIMAL(20,4),
    },
    SeHizoLaRetencionIva: {
        type: DataTypes.STRING,
    },
    fldTimeStamp: {
        type: DataTypes.INTEGER,
    },
    isVisible: {
      type: DataTypes.INTEGER,
    }
      
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'documento_pagado',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
});