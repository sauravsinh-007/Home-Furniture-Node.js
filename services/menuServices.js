const express = require('express');
const menu = require("../models/menu.model");
const bcrypt = require('bcryptjs/dist/bcrypt');

const getAllMenu = async (req, res) => {
    try {
        const menuData = await menu.find()
        console.log("Menu Data get Successfully");
        res.status(200).json(menuData)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const createMenu = async (req, res) => {
    try {
        const menuData = req.body
        console.log('userData', menuData)

        const newMenu = new menu(menuData)
        const response = await newMenu.save()
        console.log("New User Data Saved")
        res.status(200).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ error: "Internal Server Error" })

    }
}

const updateMenu = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log('userID', userID)
        const updateMenuData = req.body;

        // Ensure the status field is valid
        // if (updateMenuData.status && !['active', 'inactive'].includes(updateMenuData.status)) {
        //     return res.status(400).json({ error: 'Invalid status value' });
        // }


        const response = await menu.findByIdAndUpdate(userID, updateMenuData, {
            new: true,
            runValidators: true
        });

        if (!response) {
            return res.status(404).json({ error: "Menu Not Found" });
        }
        console.log("Menu Data Updated");
        res.status(200).json(response);
    } catch (err) {
        console.error('Error updating menu:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


const deleteMenu = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log('userID', userID);

        const response = await menu.findByIdAndDelete(userID);

        if (!response) {
            return res.status(404).json({
                error: 'Menu not found'
            });
        }

        console.log("Menu Data Deleted");
        return res.status(200).json({ message: "Menu Data Deleted Successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = { getAllMenu, createMenu, updateMenu, deleteMenu }