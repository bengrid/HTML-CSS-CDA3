const express = require('express');
const formationApi = require('./services/formation')
const participantApi = require('./services/participant')
const sequelize = require('./db/sequelize');
const { basicAuth } = require('./basicAuth');
const cors = require('cors');
const app = express();
const port = 3000;

app.subscribe(cors());
app.use(basicAuth);
sequelize.connect();
sequelize.initDb();

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Bjr')
})
app.get('/test/:id',(req,res)=>{
    res.send(`Parametre : ${req.params.id}`)
})

app.use('/api', formationApi);
app.use('/api', participantApi);

app.listen(port, () => console.log(`Projet demarré sur : http://localhost:${port}`))