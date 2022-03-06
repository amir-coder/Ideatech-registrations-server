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

// get user by id

//export async callback function that takes a req and reponse as parameters 
//and then retrieve info by using usersDB

module.exports.getById = async (req, res)=>{
    try{
        //get info
        const user = await usersDB.find({"_id": req.body._id});
        console.log(`LOGS:Getting user's info ...`);
        res.status(200).send(user);
    }catch(err){
        console.log('LOGS:Getting user info failed' +  err);
        res.status(500).send(err);
    }
};

//adding a user

module.exports.addUser = async (req, res) => {
    try{
        //verify information here
        //check if user exists
        if(await usersDB.findOne({email: req.body.email})){
            res.status(400).send({error: 'User Already saved'});
        }
        user = await usersDB.create(req.body);
        console.log('LOG: creating user');
        user = user.toJson();
        res.status(200).send(user._id);
    }catch(err){
        console.log('LOG: user creation failed '+ err);
        res.status(500).send(err);
    }
}

//make checked in

module.exports.checkIn = async (req, res) => {
    try{
        const user = await usersDB.findOne({'_id': req.body._id});
        console.log('LOG: getting user');
        if(user.length ===0){
            //user not found
            console.log('User not found');
            res.status(250).send(user);
        }else{
            //user found
            user.checkedIn = true;
            await user.save();
            console.log('LOG: user saved');
            res.status(200).send(user); 
        }
    }catch(err){
        console.log('Cannot register user as checked-In' + err);
        res.status(500).send(err);
    }
};