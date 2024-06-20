import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/connection'; 

class CxP extends Model {

  ConsecutivoCompania: number | undefined;
	ConsecutivoCxp: number | undefined;
	Numero: string | undefined;
	TipoDeCxp: string | undefined;
	Status: string | undefined;
	CodigoProveedor: string | undefined;
	Fecha: any | undefined;
	FechaCancelacion: any | undefined;
	FechaVencimiento: any | undefined;
	FechaAnulacion: any | undefined;
	Moneda: string | undefined;
	CambioAbolivares: number | undefined;
	AplicaParaLibrodeCompras: string | undefined;
	MontoExento: number | undefined;
	MontoGravado: number | undefined;
	MontoIva: number | undefined;
	MontoAbonado: number | undefined;
	MesDeAplicacion: number | undefined;
	AnoDeAplicacion: number | undefined;
	Observaciones: string | undefined;
	CreditoFiscal: string | undefined;
	TipoDeCompra: string | undefined;
	SeHizoLaRetencion: string | undefined;
	MontoGravableAlicuotaGeneral: number | undefined;
	MontoGravableAlicuota2: number | undefined;
	MontoGravableAlicuota3: number | undefined;
	MontoIvaalicuotaGeneral: number | undefined;
	MontoIvaalicuota2: number | undefined;
	MontoIvaalicuota3: number | undefined;
	NumeroPlanillaDeImportacion: string | undefined;
	NumeroExpedienteDeImportacion: string | undefined;
	TipoDeTransaccion: string | undefined;
	NumeroDeFacturaAfectada: string | undefined;
	NumeroControl: string | undefined;
	SeHizoLaRetencionIva: string | undefined;
	NumeroComprobanteRetencion: string | undefined;
	FechaAplicacionRetIva: any | undefined;
	PorcentajeRetencionAplicado: number | undefined;
	MontoRetenido: number | undefined;
	OrigenDeLaRetencion: string | undefined;
	RetencionAplicadaEnPago: string | undefined;
	OrigenInformacionRetencion: string | undefined;
	CxPgeneradaPor: string | undefined;
	EsCxPhistorica: string | undefined;
	NumDiasDeVencimiento: number | undefined;
	NumeroDocOrigen: string | undefined;
	CodigoLote: string | undefined;
	GenerarAsientoDeRetiroEnCuenta: string | undefined;
	TotalOtrosImpuestos: number | undefined;
	SeContabilRetIva: string | undefined;
	DondeContabilRetIva: string | undefined;
	CodigoMoneda: string | undefined;
	EstaAsociadoARendicion: string | undefined;
	ConsecutivoRendicion: number | undefined;
	OrigenDeLaRetencionISLR: string | undefined;
	DondeContabilISLR: string | undefined;
	ISLRAplicadaEnPago: string | undefined;
	MontoRetenidoISLR: number | undefined;
	SeContabilISLR: string | undefined;
	FechaAplicacionImpuestoMunicipal: any | undefined;
	NumeroComprobanteImpuestoMunicipal: string | undefined;
	MontoRetenidoImpuestoMunicipal: number | undefined;
	ImpuestoMunicipalRetenido: string | undefined;
	NumeroControlDeFacturaAfectada: string | undefined;
	NumeroDeclaracionAduana: string | undefined;
	FechaDeclaracionAduana: any | undefined;
	UsaPrefijoSerie: string | undefined;
	EsUnaCuentaATerceros: string | undefined;
	CodigoProveedorOriginalServicio: string | undefined;
	NombreOperador: string | undefined;
	FechaUltimaModificacion: any | undefined;
	//fldTimeStamp: any | undefined;
	SeHizoLaDetraccion: string | undefined;
	AplicaIvaAlicuotaEspecial: string | undefined;
	MontoGravableAlicuotaEspecial1: number | undefined;
	MontoIVAAlicuotaEspecial1: number | undefined;
	PorcentajeIvaAlicuotaEspecial1: number | undefined;
	MontoGravableAlicuotaEspecial2: number | undefined;
	MontoIVAAlicuotaEspecial2: number | undefined;
	PorcentajeIvaAlicuotaEspecial2: number | undefined;
	DiaDeAplicacion: number | undefined;
	NumeroSerie: string | undefined;
	NumeroDeDocumento: string | undefined;
	NumeroSerieDocAfectado: string | undefined;
	NumeroDeDocumentoAfectado: string | undefined;
	CodigoTipoDeComprobante: string | undefined;
	isVisible: number | undefined;
}

export const cxp = CxP.init({
    ConsecutivoCompania: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ConsecutivoCxp: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
   
    
    // Model attributes are defined here
    PorcentajeIvaAlicuotaEspecial2: {
      type: DataTypes.INTEGER,
      // allowNull: true
    },
    CodigoTipoDeComprobante: {
      type: DataTypes.STRING,
      // allowNull: true
    },

    Numero: {
      type: DataTypes.STRING,
      // allowNull: true
    },

	TipoDeCxp: {
      type: DataTypes.STRING,
      // allowNull: true
    },
	Status: {
    type: DataTypes.STRING,
    // allowNull: true
  },
	CodigoProveedor: {
    type: DataTypes.STRING,
    // allowNull: true
  },
	Fecha: {
    type: DataTypes.DATEONLY,
    // allowNull: true
  },
	FechaCancelacion: {
    type: DataTypes.DATE,
    // allowNull: true
  },
	FechaVencimiento: {
    type: DataTypes.DATE,
    // allowNull: true
  },
	FechaAnulacion: {
    type: DataTypes.DATE,
    // allowNull: true
  },
	Moneda: {
    type: DataTypes.STRING,
    // allowNull: true
  },
	CambioAbolivares: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	AplicaParaLibrodeCompras: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	MontoExento: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoGravado: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIva: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoAbonado: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MesDeAplicacion: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	AnoDeAplicacion: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	Observaciones: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	CreditoFiscal: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	TipoDeCompra: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	SeHizoLaRetencion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	MontoGravableAlicuotaGeneral: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoGravableAlicuota2: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoGravableAlicuota3: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIvaalicuotaGeneral: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIvaalicuota2: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIvaalicuota3: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	NumeroPlanillaDeImportacion: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	NumeroExpedienteDeImportacion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	TipoDeTransaccion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroDeFacturaAfectada: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroControl: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	SeHizoLaRetencionIva: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroComprobanteRetencion: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	FechaAplicacionRetIva: {
		type: DataTypes.DATE,
		// allowNull: true
	  },
	PorcentajeRetencionAplicado: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoRetenido: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	OrigenDeLaRetencion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	RetencionAplicadaEnPago: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	OrigenInformacionRetencion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	CxPgeneradaPor: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	EsCxPhistorica: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumDiasDeVencimiento: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	NumeroDocOrigen: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	CodigoLote: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	GenerarAsientoDeRetiroEnCuenta: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	TotalOtrosImpuestos: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	SeContabilRetIva: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	DondeContabilRetIva: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	CodigoMoneda: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	EstaAsociadoARendicion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	ConsecutivoRendicion: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	OrigenDeLaRetencionISLR: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	DondeContabilISLR: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	ISLRAplicadaEnPago: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	MontoRetenidoISLR: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	SeContabilISLR: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	FechaAplicacionImpuestoMunicipal: {
		type: DataTypes.DATE,
		// allowNull: true
	  },
	NumeroComprobanteImpuestoMunicipal: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	MontoRetenidoImpuestoMunicipal: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	ImpuestoMunicipalRetenido: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroControlDeFacturaAfectada: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroDeclaracionAduana: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	FechaDeclaracionAduana: {
		type: DataTypes.DATE,
		// allowNull: true
	  },

	UsaPrefijoSerie: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	EsUnaCuentaATerceros: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	CodigoProveedorOriginalServicio: {
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
	/*fldTimeStamp: {
		type: DataTypes.DATE,
		// allowNull: true
	  },*/
	SeHizoLaDetraccion: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	AplicaIvaAlicuotaEspecial: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	MontoGravableAlicuotaEspecial1: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIVAAlicuotaEspecial1: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	PorcentajeIvaAlicuotaEspecial1: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoGravableAlicuotaEspecial2: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	MontoIVAAlicuotaEspecial2: {
		type: DataTypes.DECIMAL(20,4),
		// allowNull: true
	  },
	DiaDeAplicacion: {
		type: DataTypes.INTEGER,
		// allowNull: true
	  },
	NumeroSerie: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroDeDocumento: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroSerieDocAfectado: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	NumeroDeDocumentoAfectado: {
		type: DataTypes.STRING,
		// allowNull: true
	  },
	isVisible: {
		type: DataTypes.INTEGER,
		defaultValue: 1
	}
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'CxP',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });

//export default CxP;