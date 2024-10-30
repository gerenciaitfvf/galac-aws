import express, { Express } from "express";
import dotenv from "dotenv";
import { cxprouter } from "./routers/cxp";
import { sequelize } from "./services/connection";
import _ from "lodash";

import { cxp } from "./models/CxP";
import { mcs } from "./models/MainControlSync";
import { authtoken } from "./middleware/authtoken";
import { mscrouter } from "./routers/MainControlSyncRouter";
import Proveedor from "./models/Proveedor";
import { proveedorrouter } from "./routers/proveedor";
import Comprobante from "./models/Comprobante";
import { comprobanterouter } from "./routers/comprobante";
import { mbankrouter } from "./routers/movimientobancario";
import MovimientoBancario from "./models/MovimientoBancario";
import DocumentoPagado from "./models/DocumentoPagado";
import Pago from "./models/Pago";
import Cambio from "./models/Cambio";
import { pagorouter } from "./routers/pago";
import { tasacambiorouter } from "./routers/tasacambio";
import { docpagadorouter } from "./routers/docpagado";
import Anticipo from "./models/Anticipo";
import AnticipoPagado from "./models/AnticipoPagado";
import AnticipoCobrado from "./models/AnticipoCobrado";
import CxC from "./models/CxC";
import { anticiporouter } from "./routers/anticipo";
import { cxcrouter } from "./routers/cxc";
import Cobranza from "./models/Cobranza";
import { cobranzarouter } from "./routers/cobranza";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(authtoken);

app.use(express.json()); // all response and body request are in json format

app.use(cxprouter);
app.use(mscrouter);
app.use(proveedorrouter);
app.use(comprobanterouter);
app.use(mbankrouter);
app.use(pagorouter);
app.use(tasacambiorouter);
app.use(docpagadorouter);
app.use(anticiporouter);
app.use(cxcrouter);
app.use(cobranzarouter);

app.listen(port, async () => {

  try {

    await sequelize.authenticate();
    await cxp.sync();
    await mcs.sync();
    await Proveedor.sync();
    await Comprobante.sync();
    await MovimientoBancario.sync();
    await DocumentoPagado.sync();
    await Pago.sync(); 
    await Cambio.sync(); 
    await Anticipo.sync(); 
    await AnticipoPagado.sync(); 
    await AnticipoCobrado.sync(); 
    await CxC.sync(); 
    await Cobranza.sync(); 
    
    console.log("Connection has been established successfully.");

  } catch (e) {
    console.error("Connection to database is not correct", e);
  }

  console.log(`[server]: Server is running at http://localhost:${port}`);
});
