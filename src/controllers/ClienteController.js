const db = require('../db/connection')

class ClienteController{
    
    index(req,res){
        db.query('SELECT * FROM cliente', (err,result)=>{
              res.render('cliente/listar',{clientes:result.rows})
          })
    }
    create(req,res){
      res.render('cliente/adicionar')  
    }
    store(req,res){
      const query = {
        text: 'INSERT INTO cliente(nome,cpf) VALUES($1,$2)',
        values:[req.body.nome, req.body.cpf]
      }
      db.query(query,(err,result)=>{
        res.redirect('/cliente/listar')
      })
    }
    edit(req,res){
      console.log(req.params.id)
      const query = {
        text:'SELECT * FROM cliente WHERE id = $1',
        values:[req.params.id]
      }
      db.query(query,(err,result)=>{
          res.render('cliente/editar',{cliente:result.rows[0]})
      })
    }
    update(req,res){
      const dados = req.body
      const query = {
        text: 'UPDATE cliente SET nome = $1, cpf = $2 WHERE id = $3',
        values:[dados.nome, dados.cpf, dados.id]
      }
      db.query(query,(err,result)=>{
          res.redirect('/cliente/listar')
      })
    }
    delete(req,res){
      const id = req.params.id
      const query = {
        text:'DELETE FROM cliente WHERE id = $1',
        values:[id]
      }
      db.query(query,(err,result)=>{
        res.redirect('/cliente/listar')
      })
    }
}

module.exports = new ClienteController()