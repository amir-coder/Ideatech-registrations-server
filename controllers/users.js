const usersDB = require('../models/db_users');


// get all users

//export async callback function that takes a req and reponse as parameters 
//and then retrieve info by using usersDB

module.exports.getAllUsers = async (req, res)=>{
    try{
        //get info
        const allUsers = await usersDB.find();
        console.log('LOGS:Getting users info ...');
        res.status(200).send(allUsers);
    }catch(err){
        console.log('LOGS:Getting all users failed' +  err);
        res.status(500).send(err);
    }
};

//adding a user

module.exports.addUser = async (req, res) => {
    try{
        //verify information here
        await usersDB.create(req.body);
        console.log('LOG: creating user');
        res.status(200).send('User created.');
    }catch(err){
        console.log('LOG: user creation failed '+ err);
        res.status(500).send(err);
    }
}