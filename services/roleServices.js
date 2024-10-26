const express = require('express');
const role = require("../models/role.model");

const getAllRole = async (req, res) => {
    try {
        const roleData = await role.find()
        console.log("Menu Data get Successfully");
        res.status(200).json(roleData)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const createRole = async (req, res) => {
    try {
        const roleData = req.body
        console.log('roleData', roleData)

        const newRole = new role(roleData)
        const response = await newRole.save()
        console.log("New User Data Saved")
        res.status(200).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ error: "Internal Server Error" })

    }
}

const updateRole = async (req, res) => {
    try {
        const userID = req.params.id
        const updateRoleData = req.body

        const response = await role.findByIdAndUpdate(userID, updateRoleData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(402).json({
                error: "Person Not Found"
            })
        }
        console.log("User Data Upadted")
        res.status(201).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ eror: "internal Server Error" })
    }
}

const deleteRole = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log('userID', userID);

        const response = await role.findByIdAndDelete(userID);

        // Check if the user was found and deleted
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

module.exports = { getAllRole, createRole, updateRole, deleteRole }