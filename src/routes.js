const express = require('express');
const routes = express();

const { registerPhone } = require('./controllers/registerCellPhone');
const { listCellphones } = require('./controllers/listCellPhones');
const { listSinglePhone } = require('./controllers/listSinglePhone');
const { deletePhone } = require('./controllers/deletePhone');
const { updatePhone } = require('./controllers/updatePhone');


routes.post("/regirtercell", registerPhone);

routes.get("/listcellphones", listCellphones);
routes.get("/listcellphones/:id", listSinglePhone);

routes.delete("/deletephone/:id", deletePhone);
routes.put("/updatephone/:id", updatePhone);




module.exports = routes;