const LivroDao = require("../../app/dao/livro-dao");
const db = require("../../config/database");
module.exports = app => {

  // Requisição para Listar Livros  
  app.get("/livros", function(req, resp) {
    const livroDao = new LivroDao(db);
    livroDao
      .lista()
      .then(livros =>
        resp.marko(require("../views/livros/listagem/lista.marko"), {
          livros: livros
        })
      )
      .catch(erro => console.log(erro));
  });
  // Requisição para Chamar formulario de Preenchimento de Livros
  app.get("/livros/form", function(req, resp) {
    resp.marko(require("../views/livros/form/form.marko"));
  });
  // Requisição para adicionar Livro
  app.post("/livros", function(req, resp) {
    console.log(req.body);
    const livroDao = new LivroDao(db);
    livroDao
      .adicionar(req.body)
      .then(resp.redirect("/livros"))
      .catch(erro => console.log(erro));
  });
   // Requisição para retornar formulario preenchido
  app.get('/livros/form/:id', function(req, resp) {
    const id = req.params.id;
    const livroDao = new LivroDao(db);

    livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'), 
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
});

  // Requisição para Deletar Livro
  app.delete("/livros/:id", function(req, resp) {
    const id = req.params.id;
    const livroDao = new LivroDao(db);
    livroDao
      .remove(id)
      .then(() => resp.status(200).end())
      .catch(erro => console.log(erro));
  });

  app.put('/livros', function(req, resp) {

    const livroDao = new LivroDao(db);

    livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
});
};
