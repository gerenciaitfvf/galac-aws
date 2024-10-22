//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import {sequelize} from '../services/connection';

export default class Anticipo extends Model {
    
  ConsecutivoCompania: number | undefined; // [int] NOT NULL,
	ConsecutivoAnticipo: number | undefined; // [int] NOT NULL,
	Status: string | undefined; // [char](1) NULL,
	Tipo: string | undefined; // [char](1) NULL,
	Fecha: any; // [smalldatetime] NULL,
	Numero: string | undefined; // [varchar](20) NULL,
	CodigoCliente: string | undefined; // [varchar](10) NULL,
	CodigoProveedor: string | undefined; // [varchar](10) NULL,
	CodigoBeneficiario: string | undefined; // [varchar](10) NOT NULL,
	NombreBeneficiario: string | undefined; // [varchar](60) NULL,
	Moneda: string | undefined; // [varchar](80) NULL,
	Cambio: number | undefined; // [money] NULL,
	GeneraMovBancario: string | undefined; // [char](1) NOT NULL,
	CodigoCuentaBancaria: string | undefined; // [varchar](5) NULL,
	CodigoConceptoBancario: string | undefined; // [varchar](8) NULL,
	GeneraImpuestoBancario: string | undefined; // [char](1) NOT NULL,
	FechaAnulacion: any; // [smalldatetime] NULL,
	FechaCancelacion: any; // [smalldatetime] NULL,
	FechaDevolucion: any; // [smalldatetime] NULL,
	Descripcion: string | undefined; // [varchar](7000) NULL,
	MontoTotal: number | undefined; // [money] NULL,
	MontoUsado: number | undefined; // [money] NULL,
	MontoDevuelto: number | undefined; // [money] NULL,
	MontoDiferenciaEnDevolucion: number | undefined; // [money] NULL,
	DiferenciaEsIdb: string | undefined; // [char](1) NOT NULL,
	EsUnaDevolucion: string | undefined; // [char](1) NOT NULL,
	NumeroDelAnticipoDevuelto: number | undefined; // [int] NULL,
	NumeroCheque: string | undefined; // [varchar](15) NULL,
	AsociarAnticipoACotiz: string | undefined; // [char](1) NOT NULL,
	NumeroCotizacion: string | undefined; // [varchar](11) NULL,
	CodigoMoneda: string | undefined; // [varchar](4) NOT NULL,
	ConsecutivoRendicion: number | undefined; // [int] NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any; // [smalldatetime] NULL,
	AsociarAnticipoACaja: string | undefined; // [char](1) NOT NULL,
	ConsecutivoCaja: number | undefined; // [int] NULL,
	Generadopor: string | undefined; // [char](1) NOT NULL,
	NumeroDeCobranzaAsociado: string | undefined; // [varchar](12) NULL,
  isVisible: number | undefined;
}

Anticipo.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ConsecutivoAnticipo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Status: {
        type: DataTypes.STRING,
      },
      Tipo: {
        type: DataTypes.STRING,
      },
      Fecha: {
        type: DataTypes.DATEONLY,
      },
      Numero: {
        type: DataTypes.STRING,
      },
      CodigoCliente: {
        type: DataTypes.STRING,
      },
      CodigoProveedor: {
        type: DataTypes.STRING,
      },
      CodigoBeneficiario: {
        type: DataTypes.STRING,
      },
      NombreBeneficiario: {
        type: DataTypes.STRING,
      },
      Moneda: {
        type: DataTypes.STRING,
      },
      Cambio: {
        type: DataTypes.DECIMAL(14,4),
      },
      GeneraMovBancario: {
        type: DataTypes.STRING,
      },
      CodigoCuentaBancaria: {
        type: DataTypes.STRING,
      },
      CodigoConceptoBancario: {
        type: DataTypes.STRING,
      },
      GeneraImpuestoBancario: {
        type: DataTypes.STRING,
      },
      FechaAnulacion: {
        type: DataTypes.DATEONLY,
      },
      FechaCancelacion: {
        type: DataTypes.DATEONLY,
      },
      FechaDevolucion: {
        type: DataTypes.DATEONLY,
      },
      Descripcion: {
        type: DataTypes.STRING,
      },
      MontoTotal: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoUsado: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoDevuelto: {
        type: DataTypes.DECIMAL(14,4),
      },
      MontoDiferenciaEnDevolucion: {
        type: DataTypes.DECIMAL(14,4),
      },
      DiferenciaEsIdb: {
        type: DataTypes.STRING,
      },
      EsUnaDevolucion: {
        type: DataTypes.STRING,
      },
      NumeroDelAnticipoDevuelto: {
        type: DataTypes.INTEGER,
      },
      NumeroCheque: {
        type: DataTypes.STRING,
      },
      AsociarAnticipoACotiz: {
        type: DataTypes.STRING,
      },
      NumeroCotizacion: {
        type: DataTypes.STRING,
      },
      CodigoMoneda: {
        type: DataTypes.STRING,
      },
      ConsecutivoRendicion: {
        type: DataTypes.INTEGER,
      },
      NombreOperador: {
        type: DataTypes.STRING,
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATEONLY,
      },
      AsociarAnticipoACaja: {
        type: DataTypes.STRING,
      },
      ConsecutivoCaja: {
        type: DataTypes.INTEGER,
      },
      Generadopor: {
        type: DataTypes.STRING,
      },
      NumeroDeCobranzaAsociado: {
        type: DataTypes.STRING,
      },
      isVisible: {
        type: DataTypes.INTEGER,
      },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance 
    modelName: 'anticipo',
	  timestamps: false,
    freezeTableName: true
  });