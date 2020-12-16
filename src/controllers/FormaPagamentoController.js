const db = require('../db/connection')

class FormaPagamentoController{
    
    index(req,res){
        db.query('SELECT * FROM forma_pagamento', (err,result)=>{
              res.render('forma-pagamento/listar',{formas:result.rows})
          })
    }
    create(req,res){
      res.render('forma-pagamento/adicionar')  
    }
    store(req,res){
      const query = {
        text: 'INSERT INTO forma_pagamento(descricao) VALUES($1)',
        values:[req.body.descricao]
      }
      db.query(query,(err,result)=>{
        res.redirect('/forma-pagamento/listar')
      })
    }
    edit(req,res){
      console.log(req.params.id)
      const query = {
        text:'SELECT * FROM forma_pagamento WHERE id = $1',
        values:[req.params.id]
      }
      db.query(query,(err,result)=>{
          res.render('forma-pagamento/editar',{forma:result.rows[0]})
      })
    }
    update(req,res){
      const dados = req.body
      const query = {
        text: 'UPDATE forma_pagamento SET descricao = $1 WHERE id = $2',
        values:[dados.descricao, dados.id]
      }
      db.query(query,(err,result)=>{
          res.redirect('/forma-pagamento/listar')
      })
    }
    delete(req,res){
      const id = req.params.id
      const query = {
        text:'DELETE FROM forma_pagamento WHERE id = $1',
        values:[id]
      }
      db.query(query,(err,result)=>{
        res.redirect('/forma-pagamento/listar')
      })
    }
}

module.exports = new FormaPagamentoController()