import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../services/connection';

class CxC extends Model {


	ConsecutivoCompania: number | undefined; //] [int] NOT NULL,
	Numero: string | undefined; // [varchar](20) NOT NULL,
	Status: string | undefined; // [char](1) NULL,
	TipoCxc: string | undefined; // [char](1) NOT NULL,
	CodigoCliente: string | undefined; // [varchar](10) NULL,
	CodigoVendedor: string | undefined; // [varchar](5) NULL,
	Origen: string | undefined; // [char](1) NULL,
	Fecha: any; // [smalldatetime] NULL,
	FechaCancelacion: any; // [smalldatetime] NULL,
	FechaVencimiento: any; // [smalldatetime] NULL,
	FechaAnulacion: any; // [smalldatetime] NULL,
	MontoExento: number | undefined; // [money] NULL,
	MontoGravado: number | undefined; // [money] NULL,
	MontoIva: number | undefined; // [money] NULL,
	MontoAbonado: number | undefined; // [money] NULL,
	Descripcion: string | undefined; // [varchar](7000) NULL,
	Moneda: string | undefined; // [varchar](80) NULL,
	CambioAbolivares: number | undefined; // [money] NULL,
	CodigoCc: string | undefined; // [varchar](5) NULL,
	CentroDeCostos: string | undefined; // [varchar](40) NULL,
	SeRetuvoIva: string | undefined; // [char](1) NOT NULL,
	NumeroDocumentoOrigen: string | undefined; // [varchar](20) NULL,
	RefinanciadoSn: string | undefined; // [char](1) NULL,
	NoAplicaParaLibroDeVentas: string | undefined; // [char](1) NOT NULL,
	CodigoLote: string | undefined; // [varchar](10) NULL,
	CodigoMoneda: string | undefined; // [varchar](4) NOT NULL,
	NumeroControl: string | undefined; // [varchar](11) NULL,
	NumeroComprobanteFiscal: string | undefined; // [varchar](12) NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any; // [smalldatetime] NULL,
	fldTimeStamp: any; // [timestamp] NOT NULL,
	FechaLimiteCambioAMonedaLocal: any; // [smalldatetime] NULL,
	ConsecutivoVendedor: number | undefined; // [int] NOT NULL,
  isVisible : number | undefined;

}

CxC.init({
    ConsecutivoCompania: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Numero: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    TipoCxc: {
      type: DataTypes.STRING,
      primaryKey: true
    },
   
    
    // Model attributes are defined here
    Status: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    Origen: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      // allowNull: true
    },
    FechaCancelacion: {
      type: DataTypes.DATEONLY,
      // allowNull: true
    },
    FechaVencimiento: {
      type: DataTypes.DATEONLY,
      // allowNull: true
    },
    FechaAnulacion: {
      type: DataTypes.DATEONLY,
      // allowNull: true
    },
    MontoExento: {
      type: DataTypes.DECIMAL(14,4),
      // allowNull: true
    },
    MontoGravado: {
      type: DataTypes.DECIMAL(14,4),
      // allowNull: true
    },
    MontoIva: {
      type: DataTypes.DECIMAL(14,4),
      // allowNull: true
    },
    MontoAbonado: {
      type: DataTypes.DECIMAL(14,4),
      // allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    Moneda: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CambioAbolivares: {
      type: DataTypes.DECIMAL(14,4),
      // allowNull: true
    },
    CodigoCc: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CentroDeCostos: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    SeRetuvoIva: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    NumeroDocumentoOrigen: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    RefinanciadoSn: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    NoAplicaParaLibroDeVentas: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CodigoLote: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    CodigoMoneda: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    NumeroControl: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    NumeroComprobanteFiscal: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    NombreOperador: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    FechaUltimaModificacion: {
      type: DataTypes.DATE,
      // allowNull: true
    },
    FechaLimiteCambioAMonedaLocal: {
      type: DataTypes.DATE,
      // allowNull: true
    },
    ConsecutivoVendedor: {
      type: DataTypes.INTEGER,
      // allowNull: true
    },
    isVisible : {
      type: DataTypes.INTEGER,
    }

  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'cxc',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });

export default CxC;