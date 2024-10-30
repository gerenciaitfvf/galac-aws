//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection";

export default class Cobranza extends Model {

	ConsecutivoCompania : number | undefined; // [int] NOT NULL,
	Numero : string | undefined; // [varchar](12) NOT NULL,
	StatusCobranza: string | undefined; // [char](1) NOT NULL,
	Fecha: any | undefined; // [smalldatetime] NOT NULL,
	FechaAnulacion: any | undefined; // [smalldatetime] NULL,
	CodigoCliente: string | undefined; // [varchar](10) NULL,
	CodigoCobrador: string | undefined; // [varchar](5) NULL,
	TotalDocumentos: number | undefined; // [money] NULL,
	RetencionIslr: number | undefined; // [money] NULL,
	TotalCobrado: number | undefined; // [money] NULL,
	CobradoEfectivo: number | undefined; // [money] NULL,
	CobradoCheque: number | undefined; // [money] NULL,
	NumerodelCheque: string | undefined; // [varchar](10) NULL,
	CobradoTarjeta: number | undefined; // [money] NULL,
	CualTarjeta: string | undefined; // [char](1) NULL,
	NroDeLaTarjeta: string | undefined; // [varchar](20) NULL,
	Origen: string | undefined; // [char](1) NULL,
	TotalOtros: number | undefined; // [money] NULL,
	NombreBanco: string | undefined; // [varchar](20) NULL,
	CodigoCuentaBancaria: string | undefined; // [varchar](5) NULL,
	CodigoConcepto: string | undefined; // [varchar](8) NULL,
	Moneda: string | undefined; // [varchar](80) NULL,
	CambioAbolivares: number | undefined; // [money] NULL,
	RetencionIva: number | undefined; // [money] NULL,
	NroComprobanteRetIva: string | undefined; // [varchar](20) NULL,
	StatusRetencionIva: string | undefined; // [char](1) NULL,
	GeneraMovBancario: string | undefined; // [char](1) NOT NULL,
	CobradoAnticipo: number | undefined; // [money] NULL,
	Vuelto: number | undefined; // [money] NULL,
	DescProntoPago: number | undefined; // [money] NULL,
	DescProntoPagoPorc: number | undefined; // [money] NULL,
	ComisionVendedor: number | undefined; // [money] NULL,
	AplicaCreditoBancario: string | undefined; // [char](1) NOT NULL,
	CodigoMoneda: string | undefined; // [varchar](4) NOT NULL,
	TipoDeDocumento: string | undefined; // [char](1) NOT NULL,
	NumeroDeComprobanteISLR: number | undefined; // [int] NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any | undefined; // [smalldatetime] NULL,
	//fldTimeStamp: number | undefined; // [timestamp] NOT NULL,
	ConsecutivoCobrador: number | undefined; // [int] NOT NULL,
  isVisible : number | undefined;
}

Cobranza.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Numero: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      StatusCobranza: {
        type: DataTypes.STRING,
      },
      Fecha: {
        type: DataTypes.DATEONLY
      },
      FechaAnulacion: {
        type: DataTypes.DATEONLY
      },
      CodigoCliente: {
        type: DataTypes.STRING,
      },
      CodigoCobrador: {
        type: DataTypes.STRING,
      },
      TotalDocumentos: {
        type: DataTypes.DECIMAL(20,4),
      },
      RetencionIslr: {
        type: DataTypes.DECIMAL(20,4),
      },
      TotalCobrado: {
        type: DataTypes.DECIMAL(20,4),
      },
      CobradoEfectivo: {
        type: DataTypes.DECIMAL(20,4),
      },
      CobradoCheque: {
        type: DataTypes.DECIMAL(20,4),
      },
      NumerodelCheque: {
        type: DataTypes.STRING,
      },
      CobradoTarjeta: {
        type: DataTypes.DECIMAL(20,4),
      },
      CualTarjeta: {
        type: DataTypes.STRING,
      },
      NroDeLaTarjeta: {
        type: DataTypes.STRING,
      },
      Origen: {
        type: DataTypes.STRING,
      },
      TotalOtros: {
        type:DataTypes.DECIMAL(20,4),
      },
      NombreBanco: {
        type: DataTypes.STRING,
      },
      CodigoCuentaBancaria: {
        type: DataTypes.STRING,
      },
      CodigoConcepto: {
        type: DataTypes.STRING,
      },
      Moneda: {
        type: DataTypes.STRING,
      },
      CambioaBolivares: {
        type: DataTypes.DECIMAL(20,4),
      },
      RetencionIva: {
        type: DataTypes.DECIMAL(20,4),
      },
      NroComprobanteRetIva: {
        type: DataTypes.STRING,
      },
      StatusRetencionIva: {
        type: DataTypes.STRING,
      },
      GeneraMovBancario: {
        type: DataTypes.STRING,
      },
      CobradoAnticipo: {
        type: DataTypes.DECIMAL(20,4),
      },
      Vuelto: {
        type: DataTypes.DECIMAL(20,4),
      },
      DescProntoPago: {
        type: DataTypes.DECIMAL(20,4),
      },
      DescProntoPagoPorc: {
        type: DataTypes.DECIMAL(20,4),
      },
      ComisionVendedor: {
        type: DataTypes.DECIMAL(20,4),
      },
      AplicaCreditoBancario: {
        type: DataTypes.STRING,
      },
      CodigoMoneda: {
        type: DataTypes.STRING,
      },
      TipoDeDocumento: {
        type: DataTypes.STRING,
      },
      NumeroDeComprobanteISLR: {
        type: DataTypes.INTEGER,
      },
      NombreOperador: {
        type: DataTypes.STRING,
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATEONLY
      },
      /*fldTimeStamp: {
        type: DataTypes.INTEGER
      },*/
      ConsecutivoCobrador: {
        type: DataTypes.INTEGER
      },
      isVisible: {
        type: DataTypes.INTEGER,
      }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'cobranza',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });