class LivroDao{
    constructor(db) {
        this._db = db;
    }
    adiciona(livros){
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

    buscaPorId(id){
        return new Promise((resolve,reject) => {
            this._db.get(` SELECT * FROM livros  WHERE id = ?`, [id] , (erro,livro) => {
                if(erro){
                    console.log(erro);
                    return reject('Nao foi possivel retornar o Livro');
                }
                return resolve(livro);
                
            }
                
            );
        });
            
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                        return resolve();
                    }
                );
            });
        }
    


    lista() {
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