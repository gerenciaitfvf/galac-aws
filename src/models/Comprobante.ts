import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection";

export default class Comprobante extends Model {

	ConsecutivoPeriodo: number | undefined; // [int] NOT NULL,
	ConsecutivoDocOrigen: number | undefined; // [int] NOT NULL,
	Numero: string | undefined; // [varchar](8) NOT NULL,
	Status: string | undefined; // [char](1) NULL,
	Fecha: any | undefined; // [smalldatetime] NULL,
	Descripcion: string | undefined; // [varchar](160) NULL,
	TotalDebe: number | undefined; // [money] NULL,
	TotalHaber: number | undefined; // [money] NULL,
	TipoAsientoModificable: string | undefined; // [char](1) NULL,
	GeneradoPor: string | undefined; // [char](1) NULL,
	NumeroDeLote: number | undefined; // [int] NULL,
	NoDocumentoOrigen: string | undefined; // [varchar](40) NULL,
	FueModificado: string | undefined; // [char](1) NOT NULL,
	VieneDeConversionInfo2000: string | undefined; // [char](1) NOT NULL,
	EsComprobanteNiif: string | undefined; // [char](1) NOT NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any | undefined; // [smalldatetime] NULL,
	
}

Comprobante.init({
    ConsecutivoPeriodo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Numero: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      ConsecutivoDocOrigen: {
        type: DataTypes.INTEGER,
      },
      Status: {
        type: DataTypes.STRING,
      },
      Fecha: {
        type: DataTypes.DATEONLY,
      },
      Descripcion: {
        type: DataTypes.STRING,
      },
      TotalDebe: {
        type: DataTypes.DECIMAL,
      },
      TotalHaber: {
        type: DataTypes.DECIMAL,
      },
      TipoAsientoModificable: {
        type: DataTypes.STRING,
      },
      GeneradoPor: {
        type: DataTypes.STRING,
      },
      NumeroDeLote: {
        type: DataTypes.INTEGER,
      },
      NoDocumentoOrigen: {
        type: DataTypes.STRING,
      },
      FueModificado: {
        type: DataTypes.STRING,
      },
      VieneDeConversionInfo2000: {
        type: DataTypes.STRING,
      },
      EsComprobanteNiif: {
        type: DataTypes.STRING,
      },
      NombreOperador: {
        type: DataTypes.STRING,
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATEONLY,
      },
      isVisible : {
        type: DataTypes.INTEGER,
      }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'comprobante',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
});