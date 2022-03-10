const usersDB = require('../models/db_users');

// get all users

//export async callback function that takes a req and reponse as parameters 
//and then retrieve info by using usersDB

module.exports.getAllUsers = async (req, res)=>{
    try{
        //get info
        const allUsers = await usersDB.find(req.headers);
        console.log('LOGS:body: ' + req.headers._id +' Getting users info ...');
        res.status(200).send(allUsers);
    }catch(err){
        console.log('LOGS:Getting all users failed' +  err);
        res.status(500).send(err);
    }
};

// get user by id

//export async callback function that takes a req and reponse as parameters 
//and then retrieve info by using usersDB
//adding a user

module.exports.addUser = async (req, res) => {
    try{
        //verify information here
        user = await usersDB.findOne({"email": req.body.email})
        //check if user exists
        if(user){
            console.log('LOG: user found in adding controller ' + user)
            res.status(400).send({"error": 'User Already saved', "_id": user._id});
        }else{
            console.log('LOG: here')
            user = await usersDB.create(req.body);
            console.log('LOG: creating user');
            console.log('LOG: user info' + user)
            res.status(200).send({"_id": user._id});
        }
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