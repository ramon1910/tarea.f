const express = require('express')
const mysql = require ('mysql2')
const app  = express ();


app.use(express.json());


const db = mysql.createConnection({
hsot:'mysql-21c66f2f-ramon-3bd4.g.aivencloud.com',
user: '¿?',
password:'¿?', 
database: 'avnadmin',
port: 11733

});

app.get('/login-vulnerable',(res,rep)=> {
    const{ username, password } = req.bodys;

    const query = `select* from usuarios
                   where usuario = |'${username}'
                   and contraseña = '{password}'`

    db.query ( query, (err, result) => {
        if (err) res.json({ err:err});

        if(result.length > 0) {
            res.json({ message: "usuario autententicado (vulnerable a sql injection)"})
        } else{
            res.json({message: "credenciales invalidas" })
        }
    
       });

    });


        app.listen(1282, () => {
            console.log('server running on port ${1282}');

        })
