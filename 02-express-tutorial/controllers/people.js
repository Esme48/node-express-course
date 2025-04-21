let {people} = require('../data')

function getPeople(req, res){
    res.status(200).json({success: true, data: people})
}

function addPerson(req, res){
    const {name}= req.body
    if(!name){
        return res.status(400).json({ success: false, message: "Please provide a name"})
    }
    people.push({id: people.length + 1, name: req.body.name})
    res.status(201).json({ success: true, name: req.body.name})
}

function getPersonById(req, res){
    const id = parseInt(req.params.id)
    const person = people.find((p) => p.id === id)

    if (!person){
        return res.status(404).json({message: "Person Not Found"})
    }
    res.status(200).json({success: true, data:person})
}

function updatePersonId(req, res){
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person){
        return res.status(404).json({message: "Person Not Found"})
    }
    const newPerson = people.map((person)=>{
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPerson})
}

function deletePerson(req, res){
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person){
        return res.status(404).json({message: "No Person With Matching ID"})
    }
    const newPerson = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({success: true, data: newPerson})
}


module.exports = {getPeople, addPerson, getPersonById, updatePersonId, deletePerson}
