const { findOne, findOneAndRemove } = require('../models/users.models');
const Users = require('../models/users.models');


const AddUser =  async(req,res) => {
    try {
        await Users.create(req.body);
        console.log(req.body);
        res.status(200).json({message: 'Users added successfully..'});    
    } catch (error) {
       console.log(error.message);
    }
}

const FindAllUsers = async (req,res) => {
    try{
        const data = await Users.find();
        res.status(200).send(data);
    } catch(error) {
        res.status(404).send({message : "Could not find users!!"})
    }
}

const FindSingleUser = async (req,res) => {
    try{
        const data = await Users.findOne({_id:req.params.id});
        res.status(200).send(data);
    } catch(error) {
        res.status(404).send({message : "Could not find this user!!"})
    }
}

const UpdateUser = async (req,res) => {
    try {
        const data = await Users.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new : true}
            );
            res.status(201).json(data)
    } catch(error) {
        res.status(500).send({error: error})
    }
}

const DeleteUser = async (req,res) => {
    try {
        const data = await Users.deleteOne({_id: req.params.id});
        res.status(200).send("Delete Successfully \n");
    } catch (error) {
        res.send({error: error});
    }
}

module.exports = {
    AddUser,
    FindAllUsers,
    FindSingleUser,
    UpdateUser,
    DeleteUser
}