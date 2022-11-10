const {Sequelize, DataTypes} = require('sequelize');
const formationModel = require('../models/formation.model');
const participantModel = require('../models/participant.model');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

let formations = [

    { id: 1, nom: 'Angular', date: new Date(), duree: 3,version: ' ', icon: '/assets/img/angular.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['TypeScript', 'Html', 'Css'] },

    { id: 2, nom: 'NodeJs', date: new Date(), duree: 1,version: ' ', icon: '/assets/img/nodejs.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaScript'] },

    { id: 3, nom: 'Symfony', date: new Date(), duree: 5,version: ' ', icon: '/assets/img/symfony.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['Php', 'Twig'] },

    { id: 4, nom: 'Spring', date: new Date(), duree: 5,version: ' ', icon: '/assets/img/spring.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaEE'] },

]

let participants =[

    { id: 1 ,nom: 'Dupont', prenom: 'Jaque', age: 35, sexe: 'H'},

    { id: 2 ,nom: 'Duchamp', prenom: 'Jean', age:26, sexe: 'H'},

    { id: 3 ,nom: 'Dupuit' ,prenom: 'Paul', age: 17, sexe: 'H'},

]

const sequelize = new Sequelize(
    'gest_form_db',//db name
    'root',//user
    'admin',//mdp
{
    host: 'localhost',
    dialect: 'mysql',
}

);

const Formation = formationModel(sequelize, DataTypes);
const Participant = participantModel(sequelize, DataTypes);
const user = userModel(sequelize, DataTypes);

const connect = () => {
    sequelize.authenticate().then(() => {
        console.log("Connexion etablie");
    }).catch((error)=>{
        console.log('Connexion echouée',error);
    })
}

const initDb = () => {
    sequelize.sync({force:true}).then(()=>{
        console.log('base de donnees a jour');
        bcrypt.hash('admin', 10).then(hash =>{
            user.create({
                username: 'root',
                password: hash
            })
        })
       
        formations.map(formation => {
            Formation.create({
                nom: formation.nom,
                version: formation.version,
                duree: formation.duree,
                date: formation.date,
                icon: formation.icon,
                formateur: formation.formateur,
                langages: formation.langages.join()
            })
        })
        participants.map(participant => {
            Participant.create({
                nom: participant.nom,
                prenom: participant.prenom,
                age: participant.age,
                sexe: participant.sexe,

            })
        })
    }).catch((error)=>{
        console.log('erreur de mise a jour');
    })
}

module.exports = {connect, initDb, Formation, Participant, user};