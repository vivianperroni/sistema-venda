const db = require('../db/connection')

class CategoriaController{
    
    index(req,res){
        db.query('SELECT * FROM categoria_produto', (err,result)=>{
              res.render('categoria-produto/listar',{categorias:result.rows})
          })
    }
    create(req,res){
      res.render('categoria-produto/adicionar')  
    }
    store(req,res){
      const query = {
        text: 'INSERT INTO categoria_produto(descricao) VALUES($1)',
        values:[req.body.descricao]
      }
      db.query(query,(err,result)=>{
        res.redirect('/categoria-produto/listar')
      })
    }
    edit(req,res){
      console.log(req.params.id)
      const query = {
        text:'SELECT * FROM categoria_produto WHERE id = $1',
        values:[req.params.id]
      }
      db.query(query,(err,result)=>{
          res.render('categoria-produto/editar',{categoria:result.rows[0]})
      })
    }
    update(req,res){
      const dados = req.body
      const query = {
        text: 'UPDATE categoria_produto SET descricao = $1 WHERE id = $2',
        values:[dados.descricao, dados.id]
      }
      db.query(query,(err,result)=>{
          res.redirect('/categoria-produto/listar')
      })
    }
    delete(req,res){
      const id = req.params.id
      const query = {
        text:'DELETE FROM categoria_produto WHERE id = $1',
        values:[id]
      }
      db.query(query,(err,result)=>{
        res.redirect('/categoria-produto/listar')
      })
    }
}

module.exports = new CategoriaController()