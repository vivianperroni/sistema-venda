const express = require('express')
const nunjucks = require('nunjucks')
const clienteController = require('./src/controllers/ClienteController')
const categoriaController = require('./src/controllers/CategoriaController')
const usuarioController = require('./src/controllers/UsuarioController')
const formaPagamentoController = require('./src/controllers/FormaPagamentoController')

const app = express()
const port = 3000
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.set('view engine','.html')

nunjucks.configure('./src/views', {
  autoescape: true,
  express: app
});

app.get('/',(req,res)=>{
  res.render('index')
})

// ROTAS CLIENTE
app.get('/cliente/listar', clienteController.index)
app.get('/cliente/adicionar', clienteController.create)
app.post('/cliente/salvar',clienteController.store)
app.get('/cliente/editar/:id',clienteController.edit)
app.post('/cliente/atualizar',clienteController.update)
app.get('/cliente/excluir/:id',clienteController.delete)

// ROTAS CATEGORIA
app.get('/categoria-produto/listar', categoriaController.index)
app.get('/categoria-produto/adicionar', categoriaController.create)
app.post('/categoria-produto/salvar',categoriaController.store)
app.get('/categoria-produto/editar/:id',categoriaController.edit)
app.post('/categoria-produto/atualizar',categoriaController.update)
app.get('/categoria-produto/excluir/:id',categoriaController.delete)

// ROTAS USUARIO
app.get('/usuario/listar', usuarioController.index)
app.get('/usuario/adicionar', usuarioController.create)
app.post('/usuario/salvar',usuarioController.store)
app.get('/usuario/editar/:id',usuarioController.edit)
app.post('/usuario/atualizar',usuarioController.update)
app.get('/usuario/excluir/:id',usuarioController.delete)

// ROTAS FORMAS PAGAMENTO
app.get('/forma-pagamento/listar',formaPagamentoController.index)
app.get('/forma-pagamento/adicionar',formaPagamentoController.create)
app.post('/forma-pagamento/salvar',formaPagamentoController.store)
app.get('/forma-pagamento/editar/:id',formaPagamentoController.edit)
app.post('/forma-pagamento/atualizar',formaPagamentoController.update)
app.get('/forma-pagamento/excluir/:id',formaPagamentoController.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})