const express = require('express');
const routes = express.Router();
const ControllerPedido = require('./controller/ControllerPedido');
const ControllerProduto = require('./controller/ControllerProduto');

//*********************************************
//Minhas rotas
//*********************************************
routes.get('/produtos',ControllerProduto.show);

routes.post('/podutos',ControllerProduto.insert);

routes.delete('/produtos/:id',ControllerProduto.delete);

routes.put('/produtos/:id',ControllerProduto.update);

routes.get('/pedidos',ControllerPedido.show);

routes.post('/pedidos',ControllerPedido.insert);

routes.delete('/pedidos/:id',ControllerPedido.delete);

routes.put('/pedidos/:id',ControllerPedido.update);

module.exports = routes;