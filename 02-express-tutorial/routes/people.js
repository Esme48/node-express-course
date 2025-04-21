const express = require('express')
const router = express.Router()

const { addPerson, getPeople, getPersonById, updatePersonId, deletePerson } = require("../controllers/people.js");

router.get('/', getPeople)// (req, res)=>{
  //  res.status(200).json({success: true, data: people})
    //})
router.post('/', addPerson)//(req, res) =>{
    //const {name}= req.body
   // if(!name){
   //     return res.status(400).json({ success: false, message: "Please provide a name"})
   // }
   // people.push({id: people.length + 1, name: req.body.name})
  //  res.status(201).json({ success: true, name: req.body.name})
    //})
router.get('/:id', getPersonById)
router.put('/:id', updatePersonId)
router.delete('/:id', deletePerson)

module.exports = router