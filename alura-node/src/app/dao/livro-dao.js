class LivroDao{
    constructor(db) {
        this._db = db;
    }
    adicionar(livros){
        return new Promise((resolve,reject) => {

            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values(?,?,?)
             `
             
            ,
                [
                    livros.titulo,
                    livros.preco,
                    livros.descricao
                ],
                function(erro){
                    if(erro){
                        console.log(erro);
                        return reject('Não foi possivel adicionar o Livro!');
                    }
                }

            );
        });
    }

    lista(){
        return new Promise((resolve,reject) =>
        {
            this._db.all('SELECT * FROM  livros',(erro,resultados) =>
                {
                    if (erro) return reject('nao foi possivel acessar o banco');

                        return resolve(resultados);
                }
            );

        });
        

    }
}
module.exports = LivroDao;