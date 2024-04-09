//import _ from "lodash";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection"; 

export default class Proveedor extends Model {
    
	ConsecutivoCompania: number | undefined; // [int] NOT NULL,
	CodigoProveedor: string | undefined; // [varchar](10) NOT NULL,
	Consecutivo: number | undefined; // [int] NOT NULL,
	NombreProveedor: string | undefined; // [varchar](160) NOT NULL,
	Contacto: string | undefined; // [varchar](35) NULL CONSTRAINT [d_ProCo]  DEFAULT (''),
	NumeroRIF: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProNuRI]  DEFAULT (''),
	NumeroNIT: string | undefined; // [varchar](12) NULL CONSTRAINT [d_ProNuNI]  DEFAULT (''),
	TipoDePersona: string | undefined; // [char](1) NULL CONSTRAINT [d_ProTiDePe]  DEFAULT ('0'),
	CodigoRetencionUsual: string | undefined; // [varchar](6) NOT NULL,
	Telefonos: string | undefined; // [varchar](40) NULL CONSTRAINT [d_ProTe]  DEFAULT (''),
	Direccion: string | undefined; // [varchar](255) NULL CONSTRAINT [d_ProDi]  DEFAULT (''),
	Fax: string | undefined; // [varchar](25) NULL CONSTRAINT [d_ProFa]  DEFAULT (''),
	Email: string | undefined; // [varchar](100) NULL CONSTRAINT [d_ProEm]  DEFAULT (''),
	TipodeProveedor: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProTiPr]  DEFAULT (''),
	TipoDeProveedorDeLibrosFiscales: string | undefined; // [char](1) NULL CONSTRAINT [d_ProTiDePrDeLiFi]  DEFAULT ('0'),
	PorcentajeRetencionIVA: number | undefined; // [decimal](30, 5) NULL CONSTRAINT [d_ProPoReIV]  DEFAULT ((0)),
	CuentaContableCxP: string | undefined; // [varchar](30) NULL CONSTRAINT [d_ProCuCoCxP]  DEFAULT (''),
	CuentaContableGastos: string | undefined; // [varchar](30) NULL CONSTRAINT [d_ProCuCoGa]  DEFAULT (''),
	CuentaContableAnticipo: string | undefined; // [varchar](30) NULL CONSTRAINT [d_ProCuCoAn]  DEFAULT (''),
	CodigoLote: string | undefined; // [varchar](10) NULL CONSTRAINT [d_ProCoLo]  DEFAULT (''),
	Beneficiario: string | undefined; // [varchar](60) NULL CONSTRAINT [d_ProBe]  DEFAULT (''),
	UsarBeneficiarioImpCheq: string | undefined; // [char](1) NOT NULL,
	TipoDocumentoIdentificacion: string | undefined; // [char](1) NULL CONSTRAINT [d_ProTiDoId]  DEFAULT ('0'),
	EsAgenteDeRetencionIva: string | undefined; // [char](1) NOT NULL,
	Nombre: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProNo]  DEFAULT (''),
	ApellidoPaterno: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProApPa]  DEFAULT (''),
	ApellidoMaterno: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProApMa]  DEFAULT (''),
	NumeroCuentaBancaria: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProNuCuBa]  DEFAULT (''),
	CodigoContribuyente: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProCoCo]  DEFAULT (''),
	NumeroRUC: string | undefined; // [varchar](20) NULL CONSTRAINT [d_ProNuRU]  DEFAULT (''),
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any | undefined; // [smalldatetime] NULL,
	TipoDePersonaLibrosElectronicos: string | undefined; // [char](1) NULL,
	CodigoPaisResidencia: string | undefined; // [varchar](4) NULL,
	CodigoConveniosSunat: string | undefined; // [varchar](2) NULL,
  isVisible: number | undefined;
}

Proveedor.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      CodigoProveedor: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      Consecutivo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NombreProveedor: {
        type: DataTypes.STRING
      },
      Contacto: {
        type: DataTypes.STRING
      },
      NumeroRIF: {
        type: DataTypes.STRING
      },
      NumeroNIT: {
        type: DataTypes.STRING
      },
      TipoDePersona: {
        type: DataTypes.STRING
      },
      CodigoRetencionUsual: {
        type: DataTypes.STRING
      },
      Telefonos: {
        type: DataTypes.STRING
      },
      Direccion: {
        type: DataTypes.STRING
      },
      Fax: {
        type: DataTypes.STRING
      },
      Email: {
        type: DataTypes.STRING
      },
      TipodeProveedor: {
        type: DataTypes.STRING
      },
      TipoDeProveedorDeLibrosFiscales: {
        type: DataTypes.STRING
      },
      PorcentajeRetencionIVA: {
        type: DataTypes.STRING
      },
      CuentaContableCxP: {
        type: DataTypes.STRING
      },
      CuentaContableGastos: {
        type: DataTypes.STRING
      },
      CuentaContableAnticipo: {
        type: DataTypes.STRING
      },
      CodigoLote: {
        type: DataTypes.STRING
      },
      Beneficiario: {
        type: DataTypes.STRING
      },
      UsarBeneficiarioImpCheq: {
        type: DataTypes.STRING
      },
      TipoDocumentoIdentificacion: {
        type: DataTypes.STRING
      },
      EsAgenteDeRetencionIva: {
        type: DataTypes.STRING
      },
      Nombre: {
        type: DataTypes.STRING
      },
      ApellidoPaterno: {
        type: DataTypes.STRING
      },
      ApellidoMaterno: {
        type: DataTypes.STRING
      },
      NumeroCuentaBancaria: {
        type: DataTypes.STRING
      },
      CodigoContribuyente: {
        type: DataTypes.STRING
      },
      NumeroRUC: {
        type: DataTypes.STRING
      },
      NombreOperador: {
        type: DataTypes.STRING
      },
      FechaUltimaModificacion: {
        type: DataTypes.DATEONLY
      },
      TipoDePersonaLibrosElectronicos: {
        type: DataTypes.STRING
      },
      CodigoPaisResidencia: {
        type: DataTypes.STRING
      },
      CodigoConveniosSunat: {
        type: DataTypes.STRING
      },
      isVisible: {
        type: DataTypes.INTEGER
      }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'proveedor',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });