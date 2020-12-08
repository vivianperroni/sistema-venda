const express = require('express')
const nunjucks = require('nunjucks')


const app = express()
const port = 3000
app.use(express.static('public'));
app.set('view engine','.html')

nunjucks.configure('./src/views', {
  autoescape: true,
  express: app
});

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/categoria-produto/listar',(req,res)=>{
  let {categoriasDeProduto} = require('./src/db/fakeData')
  res.render('categoria-produto/listar',{categorias:categoriasDeProduto})
})

app.get('/categoria-produto/adicionar',(req,res)=>{
  res.render('categoria-produto/adicionar')
})

app.get('/clientes/listar',(req,res)=>{
  let {clientes} = require('./src/db/fakeData')
  res.render('clientes/listar',{categorias:clientes})
})

app.get('/clientes/adicionar',(req,res)=>{
  res.render('clientes/adicionar')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})