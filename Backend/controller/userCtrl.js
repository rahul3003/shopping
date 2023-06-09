const User = require("../modules/userModel");
const asyncHandler = require('express-async-handler');
const { generateToken } = require("../config/jwt");
const validateMongodbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require('jsonwebtoken')

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
                const refreshToken = await generateRefreshToken(findUser?._id);
                const updateuser = await User.findByIdAndUpdate(
                    findUser.id,
                    {
                        refreshToken: refreshToken,
                    },
                    { new: true }
                );
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 72 * 60 * 60 * 1000,
                });
                res.json({
                    _id: findUser?._id,
                    firstname: findUser?.firstname,
                    lastname: findUser?.lastname,
                    email: findUser?.email,
                    mobile: findUser?.mobile,
                    token: generateToken(findUser?._id),
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
        validateMongodbId(id)
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
    async (req, res) => {
        const { id } = req.params;
        validateMongodbId(id)
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
    async (req, res) => {
        const { _id } = req.user;
        validateMongodbId(_id)
        try {
            const updatedUser = await User.findByIdAndUpdate(_id, {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            }, {
                new: true,
            })
            res.json(updatedUser)
        } catch (error) {
            throw new Error(error)
        }
    }
)

// handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh Token in cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) throw new Error("No refresh token matched in db or not matched")
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id){
            throw new Error("There is Something wrong in refresh token")
        }
        const accessToken = generateToken(user?.id);
        res.json(accessToken)
    })

})

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh Token in cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true
        });
        return res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    })
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    })
    return res.sendStatus(204)
})

//block user 
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id)
    try {
        const block = await User.findByIdAndUpdate(
            id, {
            isBlocked: true,
        }, {
            new: true,
        });
        res.json({
            message: "User Blocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})

//unblock user 
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id)
    try {
        const unblock = await User.findByIdAndUpdate(
            id, {
            isBlocked: false,
        }, {
            new: true,
        }
        );
        res.json({
            message: "User Unblocked"
        });
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createUser, loginCtrl, getAllUsers, getAUser, deleteUser, updatedUser, blockUser, unblockUser, handleRefreshToken, logout }