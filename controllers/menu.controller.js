const menuService = require('../services/menuServices');
const express = require("express")


const getMenu = async (req, res) => {
    try {
        await menuService.getAllMenu(req, res);
    } catch (err) {
        console.error(err);
    }
};


const createMenu = async (req, res) => {
    console.log('req', req.body)
    try {
        const menuCreateData = await menuService.createMenu(req, res);
    } catch (err) {
        console.error(err);
    }
};

const updateMenu = async (req, res) => {
    try {
        await menuService.updateMenu(req, res);
    } catch (err) {
        console.error(err);
    }
};

const deleteMenu = async (req, res) => {
    try {
        await menuService.deleteMenu(req, res);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getMenu, createMenu, updateMenu, deleteMenu };
