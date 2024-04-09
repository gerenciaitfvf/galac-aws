import { DataTypes, Model } from "sequelize";
import { sequelize } from "../services/connection";

export default class MovimientoBancario extends Model {

	ConsecutivoCompania: number | undefined; //[int] NOT NULL,
	ConsecutivoMovimiento: number | undefined; // [int] NOT NULL,
	CodigoCtaBancaria: string | undefined; // [varchar](5) NOT NULL,
	CodigoConcepto: string | undefined; // [varchar](8) NOT NULL,
	Fecha: any | undefined; // [smalldatetime] NOT NULL,
	TipoConcepto: string | undefined; // [char](1) NULL,
	Monto: number | undefined; // [money] NULL,
	NumeroDocumento: string | undefined; // [varchar](25) NULL,
	Descripcion: string | undefined; // [varchar](7000) NULL,
	GeneraImpuestoBancario: string | undefined; // [char](1) NOT NULL,
	NroMovimientoRelacionado: string | undefined; // [varchar](15) NULL,
	GeneradoPor: string | undefined; // [char](1) NULL,
	CambioAbolivares: number | undefined; // [money] NULL,
	ImprimirCheque: string | undefined; // [char](1) NOT NULL,
	ConciliadoSn: string | undefined; // [char](1) NOT NULL,
	NroConciliacion: string | undefined; // [varchar](9) NOT NULL,
	GenerarAsientoDeRetiroEnCuenta: string | undefined; // [char](1) NOT NULL,
	NombreOperador: string | undefined; // [varchar](10) NULL,
	FechaUltimaModificacion: any | undefined; // [smalldatetime] NULL,
	AlicuotaImpBancario: number | undefined; // [money] NULL,
    isVisible : number | undefined;

}

MovimientoBancario.init({
    ConsecutivoCompania: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    CodigoCtaBancaria: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    CodigoConcepto: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Fecha: {
        type: DataTypes.DATEONLY,
        primaryKey: true
    },
    ConsecutivoMovimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    TipoConcepto: {
        type: DataTypes.STRING,
    },
    Monto: {
        type: DataTypes.DECIMAL,
    },
    NumeroDocumento: {
        type: DataTypes.STRING,
    },
    Descripcion: {
        type: DataTypes.STRING,
    },
    GeneraImpuestoBancario: {
        type: DataTypes.STRING,
    },
    NroMovimientoRelacionado: {
        type: DataTypes.STRING,
    },
    GeneradoPor: {
        type: DataTypes.STRING,
    },
    CambioAbolivares: {
        type: DataTypes.DECIMAL,
    },
    ImprimirCheque: {
        type: DataTypes.STRING,
    },
    ConciliadoSn: {
        type: DataTypes.STRING,
    },
    NroConciliacion: {
        type: DataTypes.STRING,
    },
    GenerarAsientoDeRetiroEnCuenta: {
        type: DataTypes.STRING,
    },
    NombreOperador: {
        type: DataTypes.STRING,
    },
    FechaUltimaModificacion: {
        type: DataTypes.DATEONLY,
    },
    AlicuotaImpBancario: {
        type: DataTypes.DECIMAL,
    },
    isVisible: {
        type: DataTypes.INTEGER,
    },
      
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'movimiento_bancario',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
});