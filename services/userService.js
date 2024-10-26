const express = require('express');
const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const getAllUser = async (req, res) => {
    try {
        const userdata = await User.find();
        console.log("User Data get Successfully");
        res.status(200).json(userdata)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Email and Password are Required" })
        }

        // find Email

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid Email or Password" })
        }

        //compare Password

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' })
        let userdata = {
            token: jwtToken,
            userData: user
        }

        res.status(200).json(userdata)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const createUser = async (req, res) => {
    try {
        const userData = req.body
        console.log('userData', userData)

        // encryptPassword code
        if (userData.password) {
            const encryptPassword = await bcrypt.hash(userData.password, 10);
            userData.password = encryptPassword
        }

        const newUser = new User(userData)
        const response = await newUser.save()
        console.log("New User Data Saved")
        res.status(200).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ error: "Internal Server Error" })

    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    try {
        if (updatedData.email) {
            const existingUser = await User.findOne({ email: updatedData.email, _id: { $ne: userId } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }
        }
        if (updatedData.password) {
            const encryptPassword = await bcrypt.hash(updatedData.password, 10);
            updatedData.password = encryptPassword;
        }


        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
    }
};


const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log('userID', userID);

        const response = await User.findByIdAndDelete(userID);

        if (!response) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        console.log("User Data Deleted");
        return res.status(200).json({ message: "User Data Deleted Successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }

}

module.exports = { getAllUser, createUser, updateUser, deleteUser, LoginUser }