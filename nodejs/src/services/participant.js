const { json } = require('body-parser');
const express = require('express');
const { format } = require('path');
const { Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize')
const router = express.Router();

let participants =[

    { id: 1, prenom: 'Jaque', age: 35},

    { id: 2, prenom: 'Jean', age:26},

    { id: 3, prenom: 'Paul', age: 17},

]

//liste participants
router.get('/participants',(req,res)=>{
    sequelize.Participant.findAll().then(resultat => {
        res.json(resultat);
    }).catch(() => {
        res.json({message:"Erreur !!"})
    })
})


//participant par id
router.get('/participants/:id',(req,res)=>{
    sequelize.Participant.findByPk(req.params.id).then(resultat => {
        res.json(resultat);
    }).catch(()=> {
        res.json({message: "Erreur !!"})
    })
})


//ajouter/modifier participant
router.post('/participants', (req,res) => {
    sequelize.Participant.create(req.body).then(resultat=>{
        res.json({message: "Creation reussie",resultat});
    }).catch(()=>{
        res.json({message: "Erreur !!"})
    })
})


//modifier participant
router.put('/participant/:id', (req,res)=>{
    const participantId=req.params.id;
    sequelize.Participant.update(req.body,
        {where: {id: participantId}
    }).then(()=>{
        sequelize.Formation.findByPk(participantId).then(resultat=>{
            res.json({message: "modif reussie", resultat})
        }).catch(()=>{
            res.json({message: "Erreur !!"})
        })
    })
})



//supprimer participant
router.delete('/participants/:id',(req,res)=>{
    const participantId = req.params.id;
    sequelize.Formation.destroy({
        where: {id: participantId}
    }).then(()=>{
        res.json({message: "Suppression reussie"})
    }).catch(()=>{
        res.json({message: "Erreur !!"})
    })
})


module.exports = router;