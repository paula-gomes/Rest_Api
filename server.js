const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');
const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');

//Insira aqui o código da tarefa proposta!
//Apesar de não ser a melhor forma de manter um projeto, utilize apenas esse arquivo. Estamos testando!

app.use(bodyParser.json());
app.use(cors());

//rotas app//

app.get('/tarefas', (req, res) => {

    db.all(`SELECT * FROM TAREFAS`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        res.send(JSON.stringify({ results: rows }));
        // passar dados para string pois é um tipo de variavel facil de ser serializada
    })
});

app.post('/tarefas', (req, res) => {

    //inserir no bd os dados enviados como JSON 
    //receber os dados json
    //passar dados para uma query

    db.run(`INSERT INTO TAREFAS (titulo, descricao, status)
    VALUES(?,?,?)`, [req.body.titulo,
    req.body.desc,
    req.body.status]);
    res.status(200).send("item inserido");

})

app.delete('/tarefas/:id', (req, res) => {

    db.run(`DELETE FROM TAREFAS WHERE id = ?`, [req.params.id],(err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send('item deletado')
});

app.get('/tarefas/:id', (req, res) => {

    db.get(`SELECT * FROM TAREFAS WHERE ID =?`, [req.params.id], (err,rows) => {
        if (err) {
            console.log(err);
        }    
    res.send(JSON.stringify({ results: rows }));
});});


app.put('/tarefas/:id', (req, res) => {

    db.run(`UPDATE TAREFAS SET  titulo=?, descricao=?, status=?
            WHERE id=?`, [req.body.titulo, req.body.descricao, req.body.status,req.params.id], (err) =>{
                res.send(err);
            });
    res.send('campo atualizado');
});

app.listen(3000, () => console.log('server initialized'));

process.on('SIGINT', () => {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    })
});

