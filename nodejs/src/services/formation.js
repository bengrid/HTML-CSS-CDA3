const express = require('express');
const router = express.Router();
const sequelize = require('../db/sequelize')



//liste formations
router.get('/formations', (req,res) =>{
    sequelize.Formation.findAll().then(resultat => {
        resultat.forEach(element =>{
            element.langages = element.langages.split(',');
        })    
        res.json(resultat);
    }).catch(()=>{
        res.json({message: "Erreur !!"})
    })

})

//formation par id
router.get('/formations/:id', (req,res) =>{
   /* const formationId = req.params.id;
    const formation = formations.find(formation => formation.id == formationId);
    res.json({message: "Formation demandée", formation});*/
    sequelize.Formation.findByPk(req.params.id).then(resultat =>{
        res.json(resultat);
    }).catch(()=>{
        res.json({message: "Erreur !!"})
    })
})

//ajouter/modifier une formation
router.post('/formations', (req,res) => {
    req.body.langages = req.body.langages.join()
    sequelize.Formation.create(req.body).then(resultat=>{ 
        res.json({message: "Creation reussie", resultat});
    }).catch(()=>{
        res.json({message: "Erreur !!"})
    })
})

//modifier une formation
router.put('/formation/:id', (req,res)=>{
    const formationId = req.body.id
    req.body.langages = req.body.langages.join()
    sequelize.Formation.update(req.body,
        {where: {id: formationId}
    }).then(()=>{
        sequelize.Formation.findByPk(formationId).then(resultat=>{
            res.json({message: "modif reussie", resultat})
        }).catch(()=>{
            res.json({message: "erreur !!"})
        })
    }).catch(()=>{
        res.json({message: "erreur !!"})
    })
    })


//supprimer une formation
router.delete('/formations/:id', (req,res) =>{
    const formationId = req.params.id;
    sequelize.Formation.destroy({
        where: {id: formationId}
    }).then(()=>{
        res.json({message: "Supression reussie"})
    }).catch(()=>{
        res.json({message: "erreur"})
    })
})


module.exports = router; 
