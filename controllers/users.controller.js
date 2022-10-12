const AddUser = async (req,res) => {
    res.send('add test')
}

const FindAllUsers = async (req,res) => {
    res.send('find all test')
}

const FindSingleUser = async (req,res) => {
    res.send('find one test')
}

const UpdateUser = async (req,res) => {
    res.send('update test')
}

const DeleteUser = async (req,res) => {
    res.send('delete test')
}

module.exports = {
    AddUser,
    FindAllUsers,
    FindSingleUser,
    UpdateUser,
    DeleteUser
}