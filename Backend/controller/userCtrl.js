const User = require("../modules/userModel");
const asyncHandler = require('express-async-handler');
const { generateToken } = require("../config/jwt");


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        //To check email already exits or not
        const findUser = await User.findOne({ email: email });
        if (!findUser) {
            //create new user
            const newUser = await User.create(req.body);
            res.json(newUser);
        } else {
            //User already exits message
            throw new Error('User Already Exits')
        }

    }
)

const loginCtrl = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        //check user exits or not
        const findUser = await User.findOne({ email });
        if (findUser) {
            if (await findUser.isPasswordMatched(password)) {
                res.json({
                    _id: findUser?.id,
                    firstname: findUser?.firstname,
                    lastname: findUser?.lastname,
                    email: findUser?.email,
                    mobile: findUser?.mobile,
                    token: generateToken(findUser?.id),
                });
            } else {
                throw new Error("Password is not matched")
            }
        } else {
            throw new Error("User email not found")
        }
    }
)

//get all user

const getAllUsers = asyncHandler(
    async (req, res) => {
        try {
            const getUsers = await User.find()
            res.json(getUsers)
        } catch (error) {
            throw new Error(error)
        }
    }
)

//get a single user

const getAUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        try {
            const getAUser = await User.findById(id)
            res.json({
                getAUser,
            })
        } catch (error) {
            throw new Error(error)
        }
    }
)

//delete a user
const deleteUser = asyncHandler(
    async (req,res) => {
        const {id} = req.params;
        try {
            const deleteUser = await User.findByIdAndDelete(id)
            res.json(deleteUser)
        } catch (error) {
            throw new Error(error)
        }
    }
)

//update a user
const updatedUser = asyncHandler(
    async (req,res) => {
        const {id} = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(id,{
                firstname:req?.body?.firstname,
                lastname:req?.body?.lastname,
                email:req?.body?.email,
                mobile:req?.body?.mobile,
            },{
                new:true,
            })
            res.json(updatedUser)
        } catch (error) {
            throw new Error(error)
        }
    }
)
module.exports = { createUser, loginCtrl, getAllUsers, getAUser, deleteUser, updatedUser }