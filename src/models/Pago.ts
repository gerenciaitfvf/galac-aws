//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection";

export default class Pago extends Model {
    
  ConsecutivoCompania: number | undefined; // [int] NOT NULL,
	NumeroComprobante: number | undefined; // [int] NOT NULL,
	NumeroCheque: string | undefined; // [varchar](25) NOT NULL,
	StatusOrdenDePago: string | undefined; // [char](1) NOT NULL,
	Fecha: any | undefined; // [smalldatetime] NOT NULL,
	FechaAnulacion: any | undefined; // [smalldatetime] NULL,
	CodigoProveedor: string | undefined; // [varchar](10) NULL,
	TotalDocumentos: number | undefined; // [money] NULL,
	TotalRetenido: number | undefined; // [money] NULL,
	TotalOtros: number | undefined; // [money] NULL,
	MontoCheque: number | undefined; // [money] NULL,
	FormaDePago: string | undefined; // [char](1) NULL,
	CodigoCuentaBancaria: string | undefined; // [varchar](5) NOT NULL,
	CodigoConcepto: string | undefined; // [varchar](8) NULL,
	AplicaDebitoBancario: string | undefined; // [char](1) NOT NULL,
	DescripcionPago: string | undefined; // [varchar](7000) NULL,
	Moneda: string | undefined; // [varchar](80) NULL,
	CambioaBolivares: number | undefined; // [money] NULL,
	TotalRetenidoIva: number | undefined; // [money] NULL,
	EsPagoHistorico: string | undefined; // [char](1) NOT NULL,
	PagadoAnticipo: number | undefined; // [money] NULL,
	TotalAnticiposSinUsar: number | undefined; // [money] NULL,
	Beneficiario: string | undefined; // [varchar](60) NULL,
	CodigoMoneda: string | undefined; // [varchar](4) NOT NULL,
	Origen: string | undefined; // [char](1) NOT NULL,
	NumeroLote: number | undefined; // [int] NOT NULL,
	TotalRetenidoImpuestoMunicipal: number | undefined; // [money] NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any | undefined; // [smalldatetime] NULL,
  isVisible : number | undefined;
}

Pago.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NumeroComprobante: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NumeroCheque: {
        type: DataTypes.STRING,
      },
      StatusOrdenDePago: {
        type: DataTypes.STRING
      },
      Fecha: {
        type: DataTypes.DATEONLY
      },
      FechaAnulacion: {
        type: DataTypes.DATEONLY
      },
      CodigoProveedor: {
        type: DataTypes.STRING,
      },
      TotalDocumentos: {
        type: DataTypes.DECIMAL(20,4),
      },
      TotalRetenido: {
        type: DataTypes.DECIMAL(20,4),
      },
      TotalOtros: {
        type: DataTypes.DECIMAL(20,4),
      },
      MontoCheque: {
        type: DataTypes.DECIMAL(20,4),
      },
      FormaDePago: {
        type: DataTypes.STRING,
      },
      CodigoCuentaBancaria: {
        type: DataTypes.STRING,
      },
      CodigoConcepto: {
        type: DataTypes.STRING,
      },
      AplicaDebitoBancario: {
        type: DataTypes.STRING,
      },
      DescripcionPago: {
        type: DataTypes.STRING,
      },
      Moneda: {
        type: DataTypes.STRING,
      },
      CambioaBolivares: {
        type: DataTypes.DECIMAL(20,4),
      },
      TotalRetenidoIva: {
        type: DataTypes.DECIMAL(20,4),
      },
      EsPagoHistorico: {
        type: DataTypes.STRING,
      },
      PagadoAnticipo: {
        type: DataTypes.DECIMAL(20,4),
      },
      TotalAnticiposSinUsar: {
        type: DataTypes.DECIMAL(20,4),
      },
      Beneficiario: {
        type: DataTypes.STRING,
      },
      CodigoMoneda: {
        type: DataTypes.STRING,
      },
      Origen: {
        type: DataTypes.STRING,
      },
      NumeroLote: {
        type: DataTypes.INTEGER,
      },
      TotalRetenidoImpuestoMunicipal: {
        type: DataTypes.DECIMAL(20,4),
      },
      NombreOperador: {
        type: DataTypes.STRING,
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATEONLY
      },
      isVisible: {
        type: DataTypes.INTEGER,
      }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'pago',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });